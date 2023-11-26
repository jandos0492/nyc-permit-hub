const express = require("express");
const { User } = require("../../db/models");
const crypto = require("crypto");
const csrf = require("csurf");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const asyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs/dist/bcrypt");
require("dotenv").config();
const zxcvbn = require("zxcvbn");

const csrfProtection = csrf({ cookie: true, header: 'X-XSRF-TOKEN' });
const router = express.Router();
router.use(csrfProtection);

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});

const sendEmail = async (to, subject, text) => {
    const mailOptions = {
        from: process.env.GMAIL_USER,
        to,
        subject,
        text,
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error("Error sending email:", error);
    }
}

const validatePasswordReset = [
    check("email")
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage("Please provide a valid email."),
    handleValidationErrors,
];

// Password reset request
router.post(
    "/",
    validatePasswordReset,
    asyncHandler(async (req, res) => {
        const { email } = req.body;

        // Generate and save reset token
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const resetToken = generateResetToken();
        user.resetToken = resetToken;
        await user.save();

        // Send reset token to the user via email
        const emailSubject = "Password Reset";
        const emailText = `Click the following link to reset your password: http://localhost:3001/reset-password/${resetToken}`

        await sendEmail(email, emailSubject, emailText);

        return res.json({ message: "Password reset request processed successfully" });
    })
);

const generateResetToken = () => {
    const token = crypto.randomBytes(32).toString('hex');

    return token;
};

const validateResetPasswordWithToken = [
    check("password")
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage("Password must be 6 characters or more.")
        .custom((value) => {
            // Custom validation function to check for spaces
            if (/\s/.test(value)) {
                throw new Error("Password must not contain spaces.");
            }

            // Custom validation function to check for at least one uppercase letter
            if (!/[A-Z]/.test(value)) {
                throw new Error("Password must contain at least one uppercase letter.");
            }

            return true;
        }),
    handleValidationErrors,
];

router.post(
    "/:token",
    validateResetPasswordWithToken,
    asyncHandler(async (req, res) => {
        const { token } = req.params;
        const { password } = req.body;

        const user = await User.findOne({ where: { resetToken: token } });

        if (!user) {
            return res.status(400).json({ message: "Invalid or expired token" });
        }

        // Updating the user's password and clear the reset token
        user.hashedPassword = await bcrypt.hash(password, 10);
        user.resetToken = null;
        await user.save();

        return res.json({ message: "Password reset successful" });
    })
)

module.exports = router;