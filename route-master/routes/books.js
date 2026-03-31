const express = require("express");
const router = express.Router();

let books = [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
    { id: 2, title: "Harry Potter", author: "J.K. Rowling" }
];

router.get("/", (req, res) => {
    res.json(books);
});

router.get("/:id", (req, res) => {
    const book = books.find(b => b.id == req.params.id);

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    res.json(book);
});

router.post("/", (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

router.put("/:id", (req, res) => {
    const book = books.find(b => b.id == req.params.id);

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    book.title = req.body.title;
    book.author = req.body.author;

    res.json(book);
});

router.delete("/:id", (req, res) => {
    books = books.filter(b => b.id != req.params.id);

    res.json({ message: "Book deleted successfully" });
});

module.exports = router;