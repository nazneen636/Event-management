const express = require("express");
const app = express();
app.use(express.json());
const notes = [];
app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.status(201).json({ message: "log created successfully" });
  console.log(req.body);
});
app.get("/allnotes", (req, res) => {
  res.status(201).json({ notes: notes, message: "notes get successfully" });
  console.log(req.body);
});
module.exports = app;
