//Ejercicio 1
let xValue = 5;

while (xValue > 0) {
  xValue = xValue - 0.5;
  console.log(xValue);
}


//Ejercicio 2
let numero = 0;
while (numero >= 0 && numero < 100) {
  numero++
  if (numero%2 !== 0) {
    console.log(numero);
  }
}

//Ejercicio 3
let num = 0;
while (num < 6) {
  num++
  console.log("[" + num + "]");
}

//Ejercicio 4

let number = 0;
let suma = 0;
while (number < 5) {
  number++
  suma = suma + number
  
}
console.log(suma);