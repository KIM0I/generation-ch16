function numAleatorio(min, max) {
  let num = Math.random() * (max - min);
  return num + min;
}
let numMagico = parseInt(numAleatorio(1, 100));
console.log(numMagico);

while (true) {
  let numIngresado = parseInt(
    prompt("Adivina el número mágico. Si te rindes escribe 0.")
  );

  if (numIngresado == 0) {
    alert("Nos vemos");
    break;

  } else if (numIngresado > numMagico) {
    alert("El número que ingresaste es MAYOR al número mágico");

  } else if (numIngresado < numMagico) {
    alert("El número que ingresaste es MENOR al número mágico");
    
  } else if (numIngresado === numMagico) {
    alert("Felicidades, adivinaste el número mágico");
    break;
  }
}
