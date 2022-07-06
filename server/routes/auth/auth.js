const { Router } = require("express");
const router = Router();
const { register, login } = require("../../controllers/auth/auth.js");
const { check } = require("express-validator");

router.post(
  "/register",
  [
    check("email", "Noto'g'ri email").isEmail(),
    check("password", "Noto'g'ri parol").isLength({ min: 6 }),
  ],
  register
  // =========== POST   http://localhost:3000/auth/register
);

router.post(
  "/login",
  [
    check("email", "Noto'g'ri email").isEmail(),
    check("password", "Parol noto'g'ri").exists(),
  ],
  login
  // =========== POST  http://localhost:3000/auth/login
);

module.exports = router;
