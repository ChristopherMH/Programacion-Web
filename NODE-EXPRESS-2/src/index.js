const express = require("express");
const cors = require("cors");
//INICIALIZARLO
const app = express();

//CONFIGURACIONES
app.set("port", process.env.PORT || 3000);

//MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//BASE DE DATOS
require("./config/connection");

//RUTAS
app.use(require("./routes/personasRoutes"));

//LEVANTAR EL SERVIDOR
app.listen(app.get("port"), (error) => {
	if (error) {
		console.log(error);
	} else {
		console.log(`Servidor en puerto: ${app.get("port")}`);
	}
});
