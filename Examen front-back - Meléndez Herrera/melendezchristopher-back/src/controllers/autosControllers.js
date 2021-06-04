const connection = require("../config/connection");

function listar(req, res) {
	if (connection) {
		let sql = "SELECT * FROM auto";
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

function crear(req, res) {
	if (connection) {
		console.log(req.body);
		const auto = req.body;

		if (!auto.modelo) {
			return res
				.status(400)
				.send({ error: true, mensaje: "El modelo es obligatorio" });
		}

		if (!auto.marca) {
			return res.status(400).send({
				error: true,
				mensaje: "La marca es obligatoria",
			});
		}

		if (!auto.anio || auto.anio.length !== 4) {
			return res.status(400).send({
				error: true,
				mensaje: "La longitud del año debe ser de 4 caracteres",
			});
		}

		if (auto.color.length > 20) {
			return res.status(400).send({
				error: true,
				mensaje: "La longitud debe ser máxima de 20 caracteres",
			});
		}

		let sql = "INSERT INTO auto set ?";

		connection.query(sql, [auto], (err, data) => {
			if (err) {
				console.log(err);
			} else {
				res.json({
					error: false,
					data,
					mensaje: "Auto creado con éxito.",
				});
			}
		});
	}
}

module.exports = {
	listar,
	crear,
};
