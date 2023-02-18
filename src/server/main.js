const express = require('express');
const ViteExpress = require('vite-express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const PORT = 1938;

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/**
 * require routers
 */
const spaceXRouter = require('./routes/spaceXapi');

/**
 * handle requests for static files
 */
app.use(express.static(path.resolve(__dirname, '../client')));

app.use('/upcoming-launches', spaceXRouter);

ViteExpress.listen(app, PORT, () =>
  console.log(`Server is listening on port ${PORT}...`)
);

module.exports = app;
