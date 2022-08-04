/* Funciones como objetos */
function miFuncion(a, b) {
  //Las funciones pueden tener ciertos atributos
  return a * b;
  let res = 0; //Propiedad
  res = a * b; //Acción o proceso
  return res;
}

console.log(typeof miFuncion);
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);