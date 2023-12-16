const express = require("express");
const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
require("dotenv").config();
const router = express.Router();

const validateContactMe = [
    check("name")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a name."),
    check("email")
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage("Please provide a valid email."),
    check("message")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a message."),
    handleValidationErrors,
]


router.post(
    "/contact-me",
    validateContactMe,
    asyncHandler(async (req, res) => {

        const { name, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
            debug: true,
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER,
            subject: `New message from NYC Permit Hub App`,
            text: `Name: ${name}\nFrom: ${email}\nMessage: ${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json("Email sent successfully!");
        } catch (error) {
            console.error("Error sending email: ", error);
            res.status(500).json("Error sending email: " + error.message);
        }
    }),
)

module.exports = router;