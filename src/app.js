const express = require('express');
const cors = require('cors');

const app = express();

const authRoutes = require('./routes/auth.routes');

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/health', (_, res) => {
    res.json({status: 'OK', service: 'Banking Service', timestamp: new Date() });
});

module.exports = app;