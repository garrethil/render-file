const router = require("express").Router();

const { getContent } = require("../../controllers/contentController.js");

// api/content
router.use("/content", getContent);

module.exports = router;
