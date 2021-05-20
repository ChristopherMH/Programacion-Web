const express = require("express");

const routes = express.Router();

const personasController = require("../controllers/personasControllers");

routes.get("/", personasController.listar);

module.exports = routes;
