const express = require("express");

const routes = express.Router();

const autosControllers = require("../controllers/autosControllers");

routes.get("/", autosControllers.listar);

routes.post("/", autosControllers.crear);

module.exports = routes;
