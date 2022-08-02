"use strict";

//convertir tipos de datos
//Casting
//Parsing

//Coersión de tipos de datos
//Conversión automática de datos
let num = "5";
let num2 = "10";

/* Concatenación
-Resultado de unir dos cadenas de texto o un número y un string */
console.log(num + num2);

//Number()
//Convierte cadenas o booleanos a números
let num3 = Number("56");
console.log(num3);

//String()
//Convierte números o booleanos a cadenas
let num4 = 4;
console.log(num4);
console.log(String(num4));

//Boolean()
//Convierte números y cadenas a booleanos
//0, "", null, undefined, NaN (faultsy values - tienden  a falso) - false
//números y letras - true

let num5 = Boolean(0);
console.log(num5);
console.log(typeof num5);