const mongoose = require("mongoose");
const Users = require("../../models/Users");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

module.exports = {
  async auth(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Noto'g'ri malumotlar",
        errors: errors.array(),
      });
    }

    const { email, login, password } = req.body;
    const isUsed = await Users.findOne({ email });

    if (isUsed) {
      return res.status(300).json({ message: "Bu email band!!!" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const auth = new Users({
      email: email,
      login: login,
      password: hashPassword,
    });

    await auth.save();
    res.status(201).json({ message: "Ro'yxatdan o'ttingiz" });
  },
};
