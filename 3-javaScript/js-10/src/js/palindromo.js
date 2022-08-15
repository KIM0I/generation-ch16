/* //Revisar si un apalabra es palindroma o no 
const palindromo = (palabra)=>{
let palabraInvertida = palabra.split("").reverse.join("");
if (palabra === palabraInvertida) {
    return "Es un palíndromo"
} else {
    retun "No es un palíndromo"
}
}
 */


//Operador ternario
const palindromo = (palabra) => {
    if (typeof palabra === 'number') {return 'No es una palabra'};

    let palabraInvertida = palabra.split("").reverse().join("");
    //if else de una sola línea -- Expresión Elvis --
    return palabra === palabraInvertida ? 'Es un palíndromo' : 'No es un palindromo';
}
module.exports = palindromo;