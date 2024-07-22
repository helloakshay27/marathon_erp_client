const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname)));

app.get('/files', (req, res) => {
    res.send('Files endpoint is working!');
});

app.get('/', (req, res) => {
    res.send('Index endpoint is working!');
});

module.exports = app;
