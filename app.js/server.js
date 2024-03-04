const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/analysis', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'surveyResults.json');
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error("Failed to read survey results:", err);
            return res.status(500).send("Error loading survey results.");
        }
        const surveyResults = JSON.parse(data.toString());
        res.render('analysis', { surveyResults: surveyResults.responses });
    });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
