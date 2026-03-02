const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Add Asset
router.post('/', (req, res) => {
    const {
        customer_id,
        asset_type,
        description,
        estimated_value,
        asset_condition,
        submitted_date
    } = req.body;

    if (!customer_id || !asset_type || !estimated_value || !submitted_date) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    const sql = `
        INSERT INTO pawned_assets
        (customer_id, asset_type, description, estimated_value, asset_condition, submitted_date)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [customer_id, asset_type, description, estimated_value, asset_condition, submitted_date],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });

            res.status(201).json({
                message: "Asset added",
                assetId: result.insertId
            });
        }
    );
});

// Get All Assets with Customer Name
router.get('/', (req, res) => {
    const sql = `
        SELECT pawned_assets.*, customers.name AS customer_name
        FROM pawned_assets
        JOIN customers
        ON pawned_assets.customer_id = customers.id
    `;

    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        res.json({
            total: results.length,
            assets: results
        });
    });
});

module.exports = router;