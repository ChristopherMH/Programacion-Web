const mysql = require("mysql");

const objectConnection = {
	host: "localhost",
	port: "3306",
	user: "root",
	password: "12345",
	database: "crud_node",
};

//Crear conexión
const myConnect = mysql.createConnection(objectConnection);

//Conectar
myConnect.connect((error) => {
	if (error) {
		console.log("Error bd: ", error);
	} else {
		console.log("Base de datos conectada");
	}
});

module.exports = myConnect;
