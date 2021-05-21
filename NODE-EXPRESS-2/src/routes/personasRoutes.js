const express = require("express");

const routes = express.Router();

const personasController = require("../controllers/personasControllers");

routes.get("/", personasController.listar);

routes.get("/:id", personasController.obtenerPersona);

routes.post("/", personasController.crear);

module.exports = routes;
