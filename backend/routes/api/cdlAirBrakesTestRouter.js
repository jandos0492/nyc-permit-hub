const router = require("express").Router();
const { CDLAirBrakesTest } = require("../../db/models");

router.get("/cdl-air-brakes", async (req, res) => {
    try {
        const airBrakesTest = await CDLAirBrakesTest.findAll();
        res.json(airBrakesTest);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});

router.get("/cdl-air-brakes/:id", async (req, res) => {
    const questionId = req.params.id;
    try {
        const question = await CDLAirBrakesTest.findByPk(questionId);

        if (!question) {
            return res.status(404).json({ message: "Question for CDL Air Brakes test not found."});
        }
        res.json(question);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
})

module.exports = router;