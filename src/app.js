const express = require('express');
const app = express();

const statusRouter = require('./routes/status');

app.use(express.json());
app.use('/', statusRouter);

module.exports = app;
