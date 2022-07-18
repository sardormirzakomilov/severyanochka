const express = require("express");
const app = express();
const CardCreate = require('./routes/card')

require('dotenv').config()
require("./helper/db")();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const authRouter = require("./routes/auth/auth");

app.use("/auth/", authRouter);

app.use('/admin', CardCreate)


app.listen(3000, () => {
  console.log(`Server running 3000`);
});
