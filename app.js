const express = require("express");
const cors = require("cors");
const middleware = require("./utils/middleware");
const keepaliveController = require("./Controller/keepalive");

const app = express();

app.use(cors());
app.use(express.json());

app.use(middleware.consoleData);

app.use("/keepalive", keepaliveController);

app.use(middleware.unknownEndpoint);

module.exports = app;