// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();

// Configure middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

// Define routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});

// This code sets up a basic Express server that listens on port 3000.  We have also added some middleware to parse JSON and URL-encoded request bodies, as well as to enable cross-origin requests using CORS.
