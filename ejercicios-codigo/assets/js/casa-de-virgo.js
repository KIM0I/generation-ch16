//Calculadora de paquetes

let munecas = parseInt(prompt("¿Cuántas muñecas quieres?"));
let payasos = parseInt(prompt("¿Cuántos payasos quieres?"));

let pesoMunecas = munecas * 75;
let pesoPayasos = payasos * 112;

alert(
  "El peso total de las muñecas es de " +
    pesoMunecas +
    " gramos. " +
    " El peso total de los payasos es de " +
    pesoPayasos +
    " gramos."
);

let pesoTotal = pesoMunecas + pesoPayasos;

let paquetes = pesoTotal / 1000;
paquetes = Math.ceil(paquetes); // Math.ceil se usa para redondear número hacia arriba

if (paquetes = 1) {
  alert("Se enviará un paquete.");
} else {
  alert("Se enviarán " + paquetes + " paquetes.");
}
