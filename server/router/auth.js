const { Router } = require("express");
const { register } = require("../controllers/auth");

const router = Router();

// router.route("/register").post(register);
router.post("/register", async (req, res) => {
  console.log(req.body);
});

module.exports = router;
