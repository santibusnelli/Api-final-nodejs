const express = require("express");
const cors = require("cors");
const middleware = require("../Api-final-nodejs/utils/middleware")

const app = express();

app.use(cors());
app.use(express.json());

app.use(middleware.consoleData);

app.use(middleware.unknownEndpoint);

module.exports = app;