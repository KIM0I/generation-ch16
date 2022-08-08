//crear un elemento

const imagen = document.createElement("img");

//modificar los atributos html del elemento
imagen.src = "https://placeimg.com/200/200/animals";
imagen.alt = "Imágenes aleatorias de animales";

console.log(imagen);
//lo insertamos en un elemento padre
document.body.appendChild(imagen);
document.body.insertAdjacentElement("afterbegin", imagen);
document.body.insertAdjacentElement("afterend", imagen);
document.body.insertAdjacentElement("beforebegin", imagen);
document.body.insertAdjacentElement("beforeend", imagen);

//forma correcta de crear e insertar un elemento
//1. Crear un elemento padre
//2. Seleccionar el elemento padre
const padreImg = document.getElementById("padreImg");

//3. Crear el elemento
const imagen2 = document.createElement("img");

//4. Modificamos los atributos del elemento

imagen2.src = "https://placeimg.com/200/200/nature";
imagen2.alt = "Imágenes aleatorias de naturaleza";

//5. Insertar elemento
padreImg.appendChild(imagen2);

//usar forEach para "pintar" datos
const frutas = ["Toronja", "Manzana", "Mandarina", "Limón", "Granada", "Melón", "Plátano", "Guayaba"]

/* const listaFrutas = document.getElementById("frutas");

frutas.forEach((element) => {
    const li = document.createElement("li");
li.textContent = element;
listaFrutas.appendChild(li)
})
 */

//forma 2 
frutas.forEach((el)) => {
    listaFrutas.innerHTML += `<li>${el}</li> `;
}