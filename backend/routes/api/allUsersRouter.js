const express = require("express");
const { User } = require("../../db/models");

const router = express.Router();

router.get("/all-users", async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;