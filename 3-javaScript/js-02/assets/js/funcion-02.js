"use strict";
function miFuncion(a, b) {
  return a + b;
}
let resultado = miFuncion(3, 2);
console.log("El resultado es: " + resultado);

/* Funcion Expresion o anónima */

let suma = function (a, b) {
  return a + b;
};

let res = suma(3, 4);

let caracteres = "La suma es: ";
console.log(caracteres + resultado);

// Resta

let resta = function (a, b) {
  return a - b;
};
let resultadoResta = resta(10, 6);
console.log("El resultado de tu resta es: " + resultadoResta);

// Multiplicación

let multi = function (a, b) {
  return a * b;
};
let resultadoMulti = multi(3, 5);
console.log("El resultado de tu multiplicación es: " + resultadoMulti);

//Cociente
let cociente = function (a, b) {
  return a / b;
};
let resultadoCociente = cociente(12, 3);
console.log("El resultado de tu división es: " + resultadoCociente);

/* Función autollamada - self-invoking */
(function (a, b) {
    console.log("El resultado de Self-Invoking es: "+ (a + b));
})(3, 4)