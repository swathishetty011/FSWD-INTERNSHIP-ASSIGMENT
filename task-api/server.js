const express = require("express");
const app = express();

app.use(express.json());

let tasks = [];
let id = 1;

/* GET all tasks */
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

/* GET single task */
app.get("/tasks/:id", (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (!task) return res.status(404).send("Task not found");
    res.json(task);
});

/* CREATE task */
app.post("/tasks", (req, res) => {

    const task = {
        id: id++,
        title: req.body.title,
        completed: false
    };

    tasks.push(task);
    res.status(201).json(task);
});

/* UPDATE task */
app.put("/tasks/:id", (req, res) => {

    const task = tasks.find(t => t.id == req.params.id);
    if (!task) return res.status(404).send("Task not found");

    task.title = req.body.title || task.title;
    task.completed = req.body.completed ?? task.completed;

    res.json(task);
});

/* DELETE task */
app.delete("/tasks/:id", (req, res) => {

    const taskIndex = tasks.findIndex(t => t.id == req.params.id);
    if (taskIndex === -1) return res.status(404).send("Task not found");

    tasks.splice(taskIndex, 1);
    res.send("Task deleted");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});