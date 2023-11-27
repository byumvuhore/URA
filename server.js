//Express server here.const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { Taxpayer, Asset, IncomeTaxPayment } = require('./model'); // Make sure to adjust the path based on your file structure

const app = express();
const port = 3000; // Use the desired port

// Connect to MongoDB
mongoose.connect('mongodb+srv://byumvuhorelucien:byumv2008@cluster0.8p6bbyo.mongodb.net/URA?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Route to capture and save data for registering a tax payer
app.post('/register-taxpayer', async (req, res) => {
  try {
    const taxpayerData = req.body;
    const newTaxpayer = await Taxpayer.create(taxpayerData);
    res.json(newTaxpayer);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to fetch all registered taxpayers
app.get('/taxpayers', async (req, res) => {
  try {
    const taxpayers = await Taxpayer.find();
    res.json(taxpayers);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Similar routes can be created for asset registration, income tax payment, and asset transfer

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
