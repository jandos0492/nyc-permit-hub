const router = require("express").Router();
const { CDLGeneralKnowladgeTest } = require("../../db/models");

router.get("/cdl/general-knowledge", async (req, res) => {
    try {
        const generalKnowladgeTest = await CDLGeneralKnowladgeTest.findAll();
        res.json(generalKnowladgeTest);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});

router.get("/cdl/general-knowladge/:id", async (req, res) => {
    const questionId = req.params.id;
    try {
        const question = await CDLGeneralKnowladgeTest.findByPk(questionId);

        if (!question) {
            return res.status(404).json({ message: `Question number: ${questionId} for CDL General knowladge test not found.`});
        }
        res.json(question);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
})

module.exports = router;