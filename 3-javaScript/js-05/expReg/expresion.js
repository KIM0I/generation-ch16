let texto = "Hoy parece que voy va a salir el sol";
let buscar = /sol/
console.log(buscar.test(texto));

let texto01 = "Te marqué anoche"
let buscar01 = /[eo]/

let texto03 = "o =9";
let buscar03 = /[1-5]/

let texto04 = "Los numeros primos son 2 3 5 7 dentro de los 10 primeros números"
let buscar04 = /d/

//verificar correo electrónico
//una palabra + una arroba + correo + punto + dos o 3 letras para finalizar la dirección  
let texto05 = belazki@hotmail.com;
let buscar05 = /[\w]+@{1}[\w]+\.[a-z]{2,3}/;
