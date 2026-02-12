const app = require("./src/app");

const connectDB = require("./src/database/db");
connectDB();
app.listen(4000, () => {
  console.log("Server running on port 4000");
});
