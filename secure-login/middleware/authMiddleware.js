const jwt = require("jsonwebtoken");

const SECRET_KEY = "mysecretkey";

const verifyToken = (req, res, next) => {

    const token = req.headers["authorization"];

    if (!token) {
        return res.status(403).json({ message: "Token required" });
    }

    try {

        const verified = jwt.verify(token, SECRET_KEY);
        req.user = verified;

        next();

    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }

};

module.exports = verifyToken;