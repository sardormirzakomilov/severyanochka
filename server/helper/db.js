const mongoose = require("mongoose");

module.exports = () => {
  const URI = "mongodb+srv://sardor:sardor7703@cluster0.hfzsm.mongodb.net/sever";

  mongoose.connect(URI, {
    useNewUrlParser: true,
  });
  const db = mongoose.connection;

  db.on("open", () => {
    console.log("server running");
  });

  db.on("error", () => {
    console.log("server error");
  });
};
