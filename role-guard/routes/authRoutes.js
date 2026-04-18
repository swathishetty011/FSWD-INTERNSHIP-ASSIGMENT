const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const verifyToken = require("../middleware/authmiddleware");
const checkRole = require("../middleware/roleMiddleware");

const SECRET_KEY = "mysecretkey";

// Signup
router.post("/signup", async (req, res) => {

    const { name, email, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        name,
        email,
        password: hashedPassword,
        role
    });

    await user.save();

    res.json({ message: "User registered successfully" });

});


// Login
router.post("/login", async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.json({ message: "User not found" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        return res.json({ message: "Invalid password" });
    }

    const token = jwt.sign(
        { id: user._id, role: user.role },
        SECRET_KEY,
        { expiresIn: "1h" }
    );

    res.json({ token });

});


// Admin Route
router.get("/admin", verifyToken, checkRole("admin"), (req, res) => {

    res.json({
        message: "Admin Dashboard Access"
    });

});


// User Route
router.get("/user", verifyToken, (req, res) => {

    res.json({
        message: "User Dashboard Access"
    });

});

module.exports = router;