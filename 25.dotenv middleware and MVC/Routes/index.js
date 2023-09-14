const router = require("express").Router();
const postRouter = require("./post");
const authRouter = require("./auth");
const testRouter = require("./test");

const log = require("../middlewares/Logger");

router.use("/post", postRouter);
router.use("/auth", authRouter);
router.use("/", testRouter);

module.exports = router;
