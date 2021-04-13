console.log("Hola de nuevo");

var mes = "Abril";
console.log(mes);

var dia = 12

// esto es un comentario
/*
console.log("dia-tipo:", typeof(dia));
var esFestivo, v2, v3, v4;
console.log(esFestivo);
*/

// console.dir(document);
// document.title = "Nuevo título"

console.log(document.head)

console.log(document.getElementById('titulo'));
var titulo = document.getElementById('titulo');
titulo.textContent = "Nuevo título";
titulo.innerText = "Nuevo nuevo título";
titulo.innerHTML = "<span>JS</span>";

var items = document.getElementsByClassName('list');
console.log(items);
items[2].textContent = "Tres";

var itemsTN = document.getElementsByTagName('li');
console.log(itemsTN);
itemsTN[1].textContent = "Dos";

function suma(a, b){
    document.getElementById('resultado').innerText = a + b;
    alert("Hiciste clic en suma");
}

var imprimir = function(dato) {
    document.getElementById('valor').innerText = dato;
}

var aumentar = function() {
    localStorage.contador++;
    imprimir(localStorage.contador);
}

var reiniciar = function() {
    localStorage.contador = 0;
    imprimir(localStorage.contador);
}

var eliminar = function() {
    localStorage.removeItem("contador");
    imprimir(localStorage.contador);
}

if(typeof(Storage) != 'undefined') {
    if(localStorage.contador) {
        imprimir(localStorage.contador)
    } else {
        localStorage.contador = 0;
    }
}