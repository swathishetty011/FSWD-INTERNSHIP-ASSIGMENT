const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Sample API
app.get("/api/message", (req, res) => {
    res.json({
        message: "Hello from Backend API"
    });
});

// API to send user data
app.post("/api/user", (req, res) => {

    const { name, email } = req.body;

    res.json({
        message: "User received successfully",
        name: name,
        email: email
    });

});

app.listen(5000, () => {
    console.log("Backend running on port 5000");
});