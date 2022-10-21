const express = require('express');
const cors = require('cors');
const lounchesRoute = require('./routes/launchesRoute');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/launches', lounchesRoute);
app.use(errorMiddleware);
module.exports = app;
