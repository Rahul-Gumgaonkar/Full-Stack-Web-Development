const router = require("express").Router();

router.use((req, res, next) => {
  console.log("Time : ", Date.now());
  next();
});

router.get("/test", (req, res) => {
  console.log("Hello Everyone");
  res.send({
    name: "rahul",
  });
});

module.exports = router;
