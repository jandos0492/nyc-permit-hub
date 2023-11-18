const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User } = require("../../db/models");
require("dotenv").config();
const bcrypt = require("bcryptjs");

const router = express.Router();

const validateSignup = [
    check("email")
        .exists({ checkFalsy: true})
        .isEmail()
        .withMessage("Please provide a valid email."),
    check("username")
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage("Please provide a username with at least 4 characters."),
    check("username")
        .not()
        .isEmail()
        .withMessage("Username cannot be an email."),
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

            // Custom validation function to check for at least one special character
            if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
                throw new Error(`Password must contain at least one special character.
                !@#$%^&*(),.?": {} |<>`);
            }

            return true;
        }),
    handleValidationErrors,
];

// Sign up
router.post(
    "",
    validateSignup,
    asyncHandler(async (req, res) => {
        const { email, password, username } = req.body;
        const user = await User.signup({ email, username, password });

        await setTokenCookie(res, user);

        return res.json({
            user,
        });
    }),
);

module.exports = router;