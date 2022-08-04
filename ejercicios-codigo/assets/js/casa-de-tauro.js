//Carreritas
let participantes = ["Lucía", "Roberto", "María", "Jesús", "Andrea", "José"];
console.log(participantes);

console.log("Andrea adelanta a María");
participantes.splice(2, 2);
participantes.splice(3, 0, "María", "Jesús");
console.log(participantes);

console.log("José es descalificado");
participantes.pop();
console.log(participantes);

console.log(
  "Detrás de Lucía y antes de Roberto clasifican Cristóbal, Fernanda y Armando"
);
participantes.splice(1, 0, "Cristóbal", "Fernanda", "Armando");
console.log(participantes);

console.log("Federico (nuevo integrante) toma el primer puesto");
participantes.unshift("Federico");
console.log(participantes);
