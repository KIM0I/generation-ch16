let arr = [1, 2, [true], 3, 4];
console.log(arr);

console.log(arr[2]);
arr[4] = 190;
arr[4] = "hola";
console.log(arr);

//métodos de arreglos
const arreglo = ["adiós"];

/* Métodos para agregar */
//push - agrega valores al final del arreglo
arreglo.push("hola");
arreglo.push(2);
console.log(arreglo);

//unshift - agrega vaalores al inicio
arreglo.unshift("A");
arreglo.unshift("b");

console.log(typeof(arreglo[4]));

/* Métodos para eliminar */
//pop - quita y guarda un elemento al final del array
let dato1 = arreglo.pop();
console.log(arreglo);
console.log(dato1);

//shift - quita y el elemento del principio del arreglo
let dato2 = arreglo.shift();
console.log(dato2);
console.log(arreglo);

//splice - quita elementos de cualquier posición del array, tambíen se pueden reemplazar o solo añadir elementos

arreglo.splice(1,1,"Bye")
console.log(arreglo
    );

//Métodos que no modifician el arreglo original, hacen una copia y la modifican

//slice - clona partes de un arreglo y lo devuelve en otro nuevo
let dato3 = arreglo.slice(0,2);
//El primer número es donde comienza y el segundo donde termina el corte (esa es la parte que queda)
console.log(dato3);
console.log(arreglo);