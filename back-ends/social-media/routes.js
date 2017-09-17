const router = require('express').Router();

router.use("/message", require("./routes/message"));
router.use("/personalData", require("./routes/personalData"));
router.use("/post", require("./routes/post"));
router.use("/premium", require("./routes/premium"));
router.use("/session", require("./routes/session"));
router.use("/subscription", require("./routes/subscription"));

module.exports = router;