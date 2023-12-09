const express = require("express");
const router = express.Router();

const { User, Result } = require("../../db/models");

router.post("/users/:userId/results", async (req, res) => {
    const { userId } = req.params;
    const { score, vehicleType, testType, testLanguage, pass } = req.body;

    try {
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found " });
        }

        const result = await Result.create({
            userId,
            score,
            vehicleType,
            testType,
            testLanguage,
            pass,
        });

        res.status(201).json(result);
    } catch (err) {
        console.error("Error creating result:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.get("/users/:userId/results", async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const results = await Result.findAll({
            where: { userId },
            order: [["createdAt", "DESC"]],
        });

        res.status(200).json(results);
    } catch (err) {
        console.error("Error getting results:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

module.exports = router;