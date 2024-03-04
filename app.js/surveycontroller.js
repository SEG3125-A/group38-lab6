const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to serve static files from 'public' directory
app.use(express.static('public'));

// Route to serve the survey form
app.get('/niceSurvey', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
