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

/*****************FUNCIONES DE FECHA*****************/
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