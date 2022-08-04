"use strict";
//Control de flujo
//Condicionales
//If

let condicion = "C" ;
if (condicion === "A") {
    /* Código que se ejecuta si se cumple la condición A */
    console.log("Cumple con la condición A");
  }
else if (condicion === "B") {
    /* Código que se ejecuta si se cumple la condición B */
    console.log("Cumple con la condición B");
  }
else if (condicion === "C") {
  /* Código que se ejecuta si se cumple la condición C */
  console.log("Cumple con la condición C");
    } 
else {
  /* Código que se ejecuta si no se cumple ninguna de las anteriores */
  console.log("No cumple con ninguna condición");
}


//Switch
let nuevaCondicion = "Hola";

switch (nuevaCondicion) {
  case "Hola":
    console.log("Buenos días");
    console.log("Espero que te encuentres bien");
    break;
  case "Adiós":
    console.log("Nos vemos");
    break;
    case "Saludos":
    console.log("Te mando un saludo");
    break;

  default:
    console.log("No entendí tu mensaje");
}

//Calculadora switch
let elegir = "sumar"
switch(elegir){

  case "sumar":
      console.log("Vamos a sumar");
      break

  case "restar":
      console.log("Vamos a restar");
      break

  case "dividir":
      console.log("Vamos a dividir");
      break

  case "multiplicar":
      console.log("Vamos a multiplicar");
      break

  default:
      console.log("No entiendo");
}
 //Calculadora if
 if(elegir == "restar"){

  console.log("Vamos a sumar");

}else if(elegir == "restar"){

  console.log("Vamos a restar");

}else if(elegir == "dividir"){

  console.log("Vamos a dividir");

}else if(elegir == "multiplicar"){

  console.log("Vamos a multiplicar");

} else {

  console.log("No entiendo");

}
