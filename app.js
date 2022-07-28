const express = require("express");
const cors = require("cors");
const middleware = require("./utils/middleware");
const keepaliveController = require("./Controller/keepalive");
const camisetasController = require("./Controller/camisetas");
const clubesController = require("./Controller/clubes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(middleware.consoleData);

app.use("/keepalive", keepaliveController);
app.use("/camisetas", camisetasController);
app.use("/clubes", clubesController);

app.use(middleware.unknownEndpoint);

module.exports = app;