const palindromo = require("../js/palindromo.js");

describe("Pruebas de función palíndromo", () => {
  test('debe regresar "es un palíndromo" si escribes "ojo"', () => {
    let mensaje = "Es un palíndromo";
    let palabra = "ojo";
    expect(palindromo(palabra)).toBe(mensaje);
  });

  test('No debe regresar "Es un palíndromo" si escribes "Generation"', () => {
    let mensaje = "Es un palíndromo";
    let palabra = "Generation";
    expect(palindromo(palabra)).not.toBe(mensaje);
  });

  test('al ingresar un número debe regresar el mensaje',() => {

    let mensaje = 'No es una palabra';
    let valor = 1;

    expect (palindromo (valor) ).toBe(mensaje);
  });
});
