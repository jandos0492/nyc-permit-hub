const router = require("express").Router();
const { CDLCombinationVehiclesTest } = require("../../db/models");

router.get("/cdl/combination-vehicles", async (req, res) => {
    try {
        const combinationVehiclesTest = await CDLCombinationVehiclesTest.findAll();
        res.json(combinationVehiclesTest);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});

router.get("/cdl/combination-vehicles/:id", async (req, res) => {
    const questionId = req.params.id;
    try {
        const question = await CDLCombinationVehiclesTest.findByPk(questionId);

        if (!question) {
            return res.status(404).json({ message: `Question number: ${questionId} for CDL Combination not found` });
        }
        res.json(question);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;