
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8080;

app.get('/data', (req, res) => {
    const fileName = req.query.n;
    const lineNumber = req.query.m;

    if (!fileName) {
        res.status(400).json({ error: "Parameter 'n' is required" });
        return;
    }

    const filePath = path.join('./temp/data', `${fileName}.txt`);

    if (!fs.existsSync(filePath)) {
        res.status(404).json({ error: 'File not found' });
        return;
    }

    if (lineNumber) {
        const lineNum = parseInt(lineNumber);

        if (isNaN(lineNum)) {
            res.status(400).json({ error: "Invalid value for parameter 'm'" });
            return;
        }

        const lines = fs.readFileSync(filePath, 'utf-8').split('\n');
        if (lineNum >= 1 && lineNum <= lines.length) {
            res.json({ data: lines[lineNum - 1] });
        } else {
            res.status(400).json({ error: 'Invalid line number' });
        }
    } else {
        const data = fs.readFileSync(filePath, 'utf-8');
        res.json({ data });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
