
//Calculadora de grados
let gradosCelsius = prompt("Temperatura en grados Celsius");

console.log("La temperatura en grados Celsius es: "+ gradosCelsius + "°");

function gradosFahrenheit(temp) {
    return (temp * 1.8) + 32;
  }

  let resultadoFahrenheit = gradosFahrenheit(gradosCelsius);
  console.log("La temperatura en grados Fahrenheit es: " + resultadoFahrenheit + "°");
  
  
  function gradosKelvin(temp) {
    return Number(temp)  + 273.15;
  }


  let resultadoKelvin = gradosKelvin(gradosCelsius);
  console.log("La temperatura en grados Kelvin es: " + resultadoKelvin + "°");