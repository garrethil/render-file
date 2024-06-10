const router = require("express").Router();

const { getContent } = require("./contentController");

router.use("/content", getContent);

module.exports = router;
