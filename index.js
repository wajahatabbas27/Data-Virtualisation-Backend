const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require("cors");

// Load environment variables
require('dotenv').config();

// Use cors middleware
app.use(cors({
  origin: 'http://localhost:3000'
}));

// Connect to MongoDB
// connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api', require('./routes/api'));

app.get("/test", async (req, res) => {
    res.json({ message: "This is Data Virtualisation Dashboard!" })
})
// Serve static files
app.use(express.static('public'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));