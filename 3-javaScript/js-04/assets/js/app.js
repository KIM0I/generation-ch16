for (var i = 0; i < 5; i=i+.5) {
  console.log(i);
}

console.log("El valor de i es " + i);

//while
let control = 0;

while (control < 5) {
  console.log("while: " + control);
  control++;
}

let control2 = true;
while (control2 === false) {
  alert("Estoy trabajando");
}

// Do () while ()

let numero = 0;
do {
  console.log("Do... While: " + numero);
  numero++;

} while (false);
