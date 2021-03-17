const express = require("express");
const router = express.Router();
const Task = require("../models/task.model");
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.post("/", async (req, res) => {
  const task = new Task(req.body);
  // console.log(task);
  task.save();
  res.json({ status: "task Saved" });
});
router.put("/:id", async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, req.body);
  res.json({ status: "task updated" });
});
router.delete("/:id", async (req, res) => {
  Task.findByIdAndRemove(req.params.id);
  res.json({ status: "task deleted" });
})
module.exports = router;
