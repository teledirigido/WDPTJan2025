const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/test", (req, res, next) => {
  res.json("This is a test route");
});

module.exports = router;
