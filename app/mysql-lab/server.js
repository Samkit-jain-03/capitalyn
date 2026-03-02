const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Import Routes
const authRoutes = require('./routes/auth');
const customerRoutes = require('./routes/customers');
const assetRoutes = require('./routes/assets');

// Mount Routes
app.use('/api', authRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/assets', assetRoutes);

// Root Route
app.get('/', (req, res) => {
    res.json({
        message: "LAB 10 - MySQL Modular Backend Running",
        endpoints: {
            register: "POST /api/register",
            login: "POST /api/login",
            customers: "GET/POST /api/customers",
            assets: "GET/POST /api/assets"
        }
    });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});