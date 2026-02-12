const express = require("express");
const app = express();
const notesModel = require("./models/note.model");
app.use(express.json());

app.post("/notes", async (req, res) => {
  const data = req.body;
  await notesModel.create({ title: data.title, description: data.description });
  res.status(201).json({ message: "note created" });
});

app.get("/allnotes", async (req, res) => {
  const notes = await notesModel.find();

  res.status(200).json({ message: "notes fetched successfully", notes: notes });
});

app.get("/singlenote/:id", async (req, res) => {
  const id = req.params.id;
  const note = await notesModel.findById(id);

  res.status(200).json({ message: "note fetched successfully", note });
});

app.delete("/deletenote/:id", async (req, res) => {
  const id = req.params.id;
  await notesModel.findOneAndDelete({ _id: id });

  res.status(200).json({ message: "note deleted successfully" });
});

app.patch("/updatenote/:id", async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  await notesModel.findByIdAndUpdate(id, { title }, { new: true });

  res.status(200).json({ message: "note updated successfully" });
});

module.exports = app;
