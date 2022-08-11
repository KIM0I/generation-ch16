/* Tipo predefinido */
let tiempo = new Date();
console.log(tiempo);
console.log(Math);

let obj_literal = {
nombre: "Juan",
edad: 35
}


let obj_constructor = new Object();
obj_constructor.nombre = 'Dora';
console.log(obj_literal);
console.log(obj_constructor);
obj_constructor.edad = "25";
console.log(obj_constructor);

obj_literal["nombre"];
let llave = "nombre";
console.log(`Esto es con llave ${obj_literal[llave]}`);


/* Tipo cadena */
let cadena = "Esta es una cadena";
let cadena_Obj = new String ("Esta es otra cadena");

console.log(cadena);
console.log(cadena_Obj);

/* Tipo numérico */
let numero = 13;
let numero_Obj = new Number (13.13);
console.log(numero)
console.log(numero_Obj);

/* Tipo compuesto o único */
let lista = ["1", "3", "5", "7"];
let lista_Obj = new Array ("1","4","6","8","9","10");

console.log(lista);
console.log(lista_Obj);