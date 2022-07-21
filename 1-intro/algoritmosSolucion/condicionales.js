// Control de flujo
/* let nombre = "Fabiola";
 */

let nombre = prompt("¿Cuál es tu nombre?");
console.log(nombre);

//Casteo - convertir un tipo de dato
let edad = parseInt(prompt("Escribe tu edad"));
console.log(edad);

if (
  (nombre === "Jonathan" && edad === 23) ||
  nombre === "Raul" ||
  nombre === "Victor"
) {
  //scope - contexto
  console.log("Eres un ");
  console.log("ADMIN ");
} else if (nombre === "Maria") {
  console.log("Eres una mentora");
} else if (nombre === "Marina") {
  console.log("Eres la jefa");
} else {
  console.log("Escribiste mal el nombre");
}
console.log("Fin del programa");
