/*****************VARIABLES*****************/

//var
console.log(uno);
var uno = "variable";
console.log(uno);

if(true){
    var x = "equis";
}
console.log(x);

//let
//console.log(dos);
let dos = "variable";
console.log(dos);

if(true){
    let y = "ye";
    console.log(y);
}
// console.log(y);

dos = "dos";
console.log(dos);

var var1 = 1;
var var1 = 2;

let let1 = 1;
// let let1 = 2;

//aquí se mantienen ambos valores en la consola
let let2 = 1;
if(true){
    let let2 = 3;
    console.log(let2);
}
console.log(let2);

//aquí se mantiene el valor más nuevo.
var var2 = 4;
if(true){
    var var2 = 5;
    console.log(var2);
}
console.log(var2);

//las constantes no permiten estar asignando nuevo valor a la variable.
const const2 = "algo";
console.log(const2);
// const2 = "otra cosa"; marcará error

/*****************VALORES VERDADEROS Y FALSOS*****************/

//Valores falsos: undefined, null, o, ''
//Valores verdaderos: los que no son falsos

let mes;
if(mes){
    document.getElementById('texto').innerText = "Variable valor verdadero";
}else{
    document.getElementById('texto').innerText = "Variable valor falso";
}

/*****************VALORES DE IGUALDAD*****************/

// == (DOBLE IGUAL) - Devuelve verdadero si ambos son iguales
// 3 == '3' marca igual

// === Devuelve verdadero si ambos operandos son iguales y tienen el mismo tipo
// 3 === '3' marca igual

mes = 10;

mes == "10" ? console.log("Verdadero") : console.log("Falso");

/*****************CONCATENACIÓN*****************/
//Templete string
let nombre = "Juan";
let apellido = "López";
const nacimiento = 1990;
function calculaEdad(nac){
    return 2021 - nac;
}

console.log(nombre +" "+apellido+", su edad es: "+calculaEdad(nacimiento));
console.log(`${nombre} ${apellido}, su edad es: ${calculaEdad(nacimiento)}`);

/*****************FUNCIONES DE FLECHA*****************/
const anios = [2000, 2005, 2010, 2020];

let edad = anios.map(function(el){
    return 2021 - el;
})
console.log(edad);

let edadNueva = anios.map(el => 2021-el);
console.log(edadNueva);

let edadNN = anios.map((el, index) =>`Edad ${index + 1}: ${2021 - el}`);
console.log(edadNN);

let edadNNN = anios.map((el, index)=>{
    const actual = new Date().getFullYear();
    const edad = actual - el;
    return `Edad ${index + 1}: ${edad}`;
})
console.log(edadNNN);

const cuadrado = function(num){
    return num * num;
}
console.log(cuadrado(2));

const cuadrado2 = (num) =>{
    return num * num;
}
console.log(cuadrado2(2));

const cuadrado3 = num => num * num;
console.log(cuadrado3(2));

const frutas = [
    {
        nombre: "Manzana",
        cantidad: 1
    },

    {
        nombre: "Fresa",
        cantidad: 12
    },

    {
        nombre: "Mora azul",
        cantidad: 3
    },

    {
        nombre: "Uva",
        cantidad: 8
    }
]

const menores10 = frutas.filter(fruta => fruta.cantidad < 10 && fruta.nombre.startsWith("M"));
console.log("Filter", menores10);

const inv = frutas.reduce((suma, fruta) => suma + fruta.cantidad, 0);
console.log("inv", inv);

/*****************DESTRUCCIÓN DE OBJETOS*****************/

let color = {
    favorito: "si",
    letraInicial: "c",
    numero: 0,
    cantidad: 0
}

let favorito = color.favorito;
let letraInicial = color.letraInicial;


const response = {
    clave: 1,
    error: false,
    data: {
        persona:{
            nombre: "",
            edad:0
        }
    }
}

// let clave = response.clave;
let {clave, error} = response;
console.log("response", response);
console.log("clave", clave);

let {clave: nuevoNombreClave, error2} = response;
console.log("clave", nuevoNombreClave);

let suma = (a, b, c, d) => a + b + c + d;
console.log("suma", suma(1,2,3,4));

let numeros = [1, 2, 3, 4];
console.log("suma2", suma(...numeros));

const alumnos = ["nombre1", "nombre2"];
const maestros = ["nombre3", "nombre4"];

const poblacion = [...alumnos, ...maestros];
console.log(poblacion);