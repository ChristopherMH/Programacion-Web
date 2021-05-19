//Necesitamos esto
const express = require("express");

//Inicializar la constante y utilizar express
const app = express();

//configuraciones
//será el nombre de la variable y un valor, en este caso port y 3000
// app.set('port', 3000)
//En caso de no usar un puerto configurado utilizará el 3000
app.set("port", process.env.PORT || 3000);

//Ruta, primero va el request y luego el respond
app.get("/", (req, res) => {
	console.log("hola");
	// res.send("Mensaje");
	res.json({ mensaje: "Mensaje de bienvenida" });
});

//Otra ruta
app.get("/hola", (req, res) => {
	console.log("hola");
	// res.send("Mensaje");
	res.json({ mensaje: "Mensaje de bienvenida 2" });
});

//Levantar el servidor
//primer parámetro el cuerpo a utilizar y el segundo una función
app.listen(app.get("port"), (error) => {
	if (error) {
		console.log("Ha ocurrido un error", error);
	} else {
		console.log("Servidor en puerto: ", app.get("port"));
	}
});
