const router = require("express").Router();
const eventRoutes = require("./eventRoutes");
const contentRoutes = require("./contentRoutes");

router.use("/content", contentRoutes);
router.use("/events", eventRoutes);

module.exports = router;
