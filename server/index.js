const express = require("express");
const app = express();
const path = require("path");

require("dotenv").config();

const mastersRouter = require("./router/master");
app.use("/", mastersRouter);
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const Register = require("./router/auth");

app.use("/auth/", Register);

try {
  const port = process.env.PORT || 5001;
  app.listen(port, () => {
    console.log(`karoci ${port} da iwlayapti >.<`);
  });
} catch (error) {
  console.log(error);
}
