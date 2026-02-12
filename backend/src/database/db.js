// mongodb+srv://rimann636_db_user:NBhxS92TQdxDePL2@cluster0.wesvj6g.mongodb.net/

const mongoose = require("mongoose");
async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://rimann636_db_user:NBhxS92TQdxDePL2@cluster0.wesvj6g.mongodb.net/halley",
  );
  console.log("connect DB successfully");
}
module.exports = connectDB;
