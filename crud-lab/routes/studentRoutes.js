const express = require("express");
const router = express.Router();
const Student = require("../models/Student");


// CREATE
router.post("/add", async (req, res) => {
    try {
        const student = new Student(req.body);
        const savedStudent = await student.save();
        res.json(savedStudent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// READ
router.get("/", async (req, res) => {
    const students = await Student.find();
    res.json(students);
});


// UPDATE
router.put("/update/:id", async (req, res) => {
    const updatedStudent = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updatedStudent);
});


// DELETE
router.delete("/delete/:id", async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student Deleted" });
});

module.exports = router;