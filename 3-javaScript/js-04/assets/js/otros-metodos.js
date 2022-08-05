//Sort
//Ordena los elementos del array según los datos de
const arr = ["X", "A", "H", "a", "W", "b"];

arr.sort();
console.log(arr);

const arr2 = ["Hola", "adiós", "bienvenido", "Calle"];

arr2.sort();
console.log(arr2);

const arr3 = [5, 1231, 567, 1, 8];

arr3.sort((a, b) => b - a);
console.log(arr3);

//Función declarada

function sumar(a, b) {
  return a + b;
}
console.log(sumar(5, 3));

let a = 2;
console.log(a);

//Función expresada

const multiplicar = function (a, b) {
  return a * b;
};
console.log(multiplicar(2, 6));

//funciones flecha

const dividir = (a, b) => {
  return a / b;
};
console.log(dividir(10, 2));


//For each
let arrNumeros = [1,2,3,4,5]
arrNumeros.forEach((elemento,index,arr) =>
console.log(elemento *= 2)); //elemento = elemento * 2
