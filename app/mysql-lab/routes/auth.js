const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Register
router.post('/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "All fields required" });
    }

    const sql = "INSERT INTO users (username, password) VALUES (?, ?)";

    db.query(sql, [username, password], (err, result) => {
        if (err) return res.status(500).json({ message: "DB Error" });

        res.json({ message: "User registered successfully" });
    });
});

// Login
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    const sql = "SELECT * FROM users WHERE username = ? AND password = ?";

    db.query(sql, [username, password], (err, results) => {
        if (err) return res.status(500).json({ message: "DB Error" });

        if (results.length === 0) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.json({ message: "Login successful" });
    });
});

module.exports = router;