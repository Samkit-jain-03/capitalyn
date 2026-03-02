const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Add Customer
router.post('/', (req, res) => {
    const { name, phone, email } = req.body;

    if (!name || !phone) {
        return res.status(400).json({ message: "Name and phone required" });
    }

    const sql = "INSERT INTO customers (name, phone, email) VALUES (?, ?, ?)";

    db.query(sql, [name, phone, email], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        res.status(201).json({
            message: "Customer added",
            customerId: result.insertId
        });
    });
});

// Get All Customers
router.get('/', (req, res) => {
    db.query("SELECT * FROM customers", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        res.json({
            total: results.length,
            customers: results
        });
    });
});

module.exports = router;