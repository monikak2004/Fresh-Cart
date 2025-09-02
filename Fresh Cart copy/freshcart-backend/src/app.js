const express = require('express');
const dotenv = require('dotenv');
const pool = require('./config/db');
const User = require('./models/user');
const authRoutes = require('./routes/authRoutes');

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());

// Call the function to create the user table
User.createTable();

// Define a simple welcome route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Use the authentication routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));