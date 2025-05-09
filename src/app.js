const express = require('express');
const app = express();

const statusRouter = require('./routes/status');

app.use(express.json());


app.use('/', statusRouter);

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`API rodando em http://${HOST}:${PORT}`);
});
