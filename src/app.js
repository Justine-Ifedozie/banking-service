const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (_, res) => {
    res.json({status: 'OK', service: 'Banking Service', timestamp: new Date() });
});

module.exports = app;