const express = require("express");

//INICIALIZARLO
const app = express();

//CONFIGURACIONES
app.set("port", process.env.PORT || 3000);

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
