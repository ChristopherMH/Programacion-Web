const connection = require("../config/connection");

function listar(req, res) {
	if (connection) {
		let sql = "SELECT * FROM persona";
		connection.query(sql, (err, personas) => {
			if (err) {
				res.json(err);
			} else {
				console.log(personas);
				res.json(personas);
			}
		});
	}
}

function obtenerPersona(req, res) {
	if (connection) {
		const { id } = req.params;
		let sql = `SELECT * FROM persona WHERE id = ${connection.escape(id)}`;
		connection.query(sql, (err, persona) => {
			if (err) {
				console.log(err);
			} else {
				var mensaje1 = "";
				if (persona === undefined || persona.length == 0)
					mensaje1 = "Persona no encontrada";

				res.json({ data: persona, mensaje: mensaje1 });
			}
		});
	}
}

function crear(req, res) {
	if (connection) {
		console.log(req.body);
		const persona = req.body;
		let sql = "INSERT INTO persona set ?";

		connection.query(sql, [persona], (err, data) => {
			if (err) {
				console.log(err);
			} else {
				res.json({ data, mensaje: "Persona creada con exito." });
			}
		});
	}
}

module.exports = {
	listar,
	obtenerPersona,
	crear,
};
