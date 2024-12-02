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
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage("Please provide a valid email."),
    // check("username")
    //     .exists({ checkFalsy: true })
    //     .isLength({ min: 4 })
    //     .withMessage("Please provide a username with at least 4 characters."),
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
            // if (!/[A-Z]/.test(value)) {
            //     throw new Error("Password must contain at least one uppercase letter.");
            // }

            return true;
        }),
    handleValidationErrors,
];

// Sign up
router.post(
    "",
    validateSignup,
    asyncHandler(async (req, res, next) => {
        console.log(req.body);
        const { email, password, username } = req.body;

        try {
            const user = await User.signup({ email, username, password });

            await setTokenCookie(res, user);

            return res.status(201).json({
                user,
            });
        } catch (err) {
            const registeredUserWithEmail = await User.findOne({
                where: {
                    email
                }
            });
            if (registeredUserWithEmail) {
                return res.status(401).json({
                    errors: ["This email is already taken. Please choose another."]
                });
            }

            const registeredUserWithUsername = await User.findOne({
                where: {
                    username
                }
            });

            if (registeredUserWithUsername) {
                return res.status(401).json({
                    errors: ["This username is already taken. Please choose another."]
                })
            }

            console.error("Signup failed.", err);
            return next(err);
        }
    }),
);

// Delete user
router.delete(
    "/:id",
    requireAuth, // Ensure only authenticated users can perform this action
    asyncHandler(async (req, res, next) => {
        const { id } = req.params;

        try {
            // Find the user by ID
            const user = await User.findByPk(id);

            if (!user) {
                // Return 404 if user not found
                return res.status(404).json({
                    message: "User not found",
                });
            }

            // Delete the user
            await user.destroy();

            // Send a success response
            return res.status(200).json({
                message: "User deleted successfully",
            });
        } catch (error) {
            console.error("Error deleting user:", error);
            return next(error); // Pass error to global error handler
        }
    })
);

module.exports = router;