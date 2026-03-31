const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/blogDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

console.log("MongoDB Connected");

app.listen(3000, () => {
  console.log("Server running on port 3000");
});