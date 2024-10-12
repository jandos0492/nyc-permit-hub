const router = require("express").Router();
const { TrafficSigns } = require("../../db/models");

router.get("/auto/traffic-signs", async (req, res) => {
    try {
        const trafficSignsData = await TrafficSigns.findAll();
        res.json(trafficSignsData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});

router.get("/auto/traffic-signs/:id", async (req, res) => {
    const trafficSignsId = req.params.id;
    try {
        const question = await TrafficSigns.findByPk(trafficSignsId);

        if (!question) {
            return res.status(404).json({ message: "Traffic Signs question not found" });
        }
        res.json(question);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;