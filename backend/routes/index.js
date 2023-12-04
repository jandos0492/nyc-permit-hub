const express = require("express");
const router = express.Router();
const apiRouter = require("./api");
const apiEnglishRoute = require("./api/englishTestRouter");
const apiRussianRoute = require("./api/russianTestRouter");
const apiTrafficSignsRoute = require("./api/trafficSignsRouter");
const apiCDLGeneralKnowledgeTestRoute = require("./api/cdlGeneralKnowledgeTestRouter");
const apiCDLAirBrakesTestRoute = require("./api/cdlAirBrakesTestRouter");
const apiCDLCombinationVehiclesTestRoute = require("./api/cdlCombinationVehiclesTestRouter");

router.use("/api", apiRouter);
router.use("/api", apiEnglishRoute);
router.use("/api", apiRussianRoute);
router.use("/api", apiTrafficSignsRoute);
router.use("/api", apiCDLGeneralKnowledgeTestRoute);
router.use("/api", apiCDLAirBrakesTestRoute);
router.use("/api", apiCDLCombinationVehiclesTestRoute);

// Static routes
// Serve React build files in produciton
if (process.env.NODE_ENV === "production") {
    const path = require("path");
    // Serve the frontend's index.html file at the root route
    router.get("/", (req, res) => {
        res.cookie("XSRF-TOKEN", req.csrfToken());
        return res.sendFile(
            path.resolve(__dirname, "../../frontend", "build", "index.html")
        );
    });

    // Serve the static assets in the frontend's build folder
    router.use(express.static(path.resolve("../frontend/build")));

    // Serve the frotend's index.html file at all other routes NOT starting with /api
    router.get(/^(?!\?api).*/, (req, res) => {
        res.cookie("XSRF-TOKEN", req, csrfToken());
        return res.sendFile(
            path.resolve(__dirname, "../../frontend", "build", "index.html")
        );
    });
}

// Add a XSRF-TOKEN cookie in development
if (process.env.NODE_ENV !== "production") {
    router.get("/api/csrf/restore", (req, res) => {
        res.cookie("XSRF-TOKEN", req.csrfToken());
        return res.json({});
    });
}

router.get("/hello/world", function(req, res) {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    res.send("Hello World!");
});

// router.post('/test', function (req, res) {
//     res.json({ requestBody: req.body });
// });

module.exports = router;