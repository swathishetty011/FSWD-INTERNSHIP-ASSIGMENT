const express = require("express");
const bodyParser = require("body-parser");

const taskRoutes = require("./routes/taskRoutes");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Root route (IMPORTANT)
app.get("/", (req, res) => {
  res.send("Task API with MVC Structure");
});

// Task Routes
app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log("Server running on http://localhost:3000");
})