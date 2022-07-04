const { Router } = require("express");
const router = Router();
const { auth } = require("../../controllers/auth/auth.js");
const { check } = require("express-validator");

router.post(
  "/",
  [
    check("email", "Noto'g'ri email").isEmail(),
    check("password", "Noto'g'ri parol").isLength({ min: 6 }),
  ],
  auth
);

module.exports = router;
