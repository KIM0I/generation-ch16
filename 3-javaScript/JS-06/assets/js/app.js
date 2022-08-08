console.log(document.getElementById("parrafo1"));

const parrafo1 = document.getElementById("parrafo1");

console.log(parrafo1.textContent);

parrafo1.textContent = "Hola desde el párrafo 1";
console.log(parrafo1.textContent);

console.log(parrafo1.style);

parrafo1.style.color = "plum";
parrafo1.style.backgroundColor = "dimgrey";

//query selector
//etiqueta = p
//clase = .parrafo
//id = #parrafo1

const parrafo2 = document.querySelector(".parrafo");
console.log(parrafo2.textContent);

parrafo2.textContent += "\n Modificando contenido desde JS 😊";
// \n -- Inserta salto de línea -- <br>

//querySelectorAll() // lista de nodos - nodeList
const parrafos = document.querySelectorAll("p");
console.log(parrafos);

parrafos[2].style.fontSize = "3rem";

//css - font size
//js - fontSize

//Modificar los atributos de HTML
const enlace = document.getElementById("enlace");
console.log(enlace);

enlace.href = "https://www.youtube.com/";
enlace.target = "_blank";
enlace.textContent = "Enlace de YouTube";

parrafo2.style.color = "#C70039";
parrafos[2].textContent = "Párrafo nuevo 🐱‍🐉 RAWR";
parrafos[2].style.color = "pink";
enlace.style.fontSize = "2rem";
enlace.style.color = "#FFC300";
enlace.style.fontFamily = "cursive";

/* Reemplazar contenido */
const parrafo4 = document.getElementById("parrafo4")
console.log(parrafo4.nodeName);
console.log(parrafo4.textContent);
console.log(document.body.innerHTML);//muestra el html que se encuentra al interior del elemento
console.log(parrafo4.innerHTML);//muestra el contenido html incluyendo el elemento

//parrafo4.outerHTML = '<a href= "http://google.com">Enlace</a>';
//Reemplaza el elemento completo

//parrafo4.innerHTML = '<a href= "http://google.com">Enlace</a>';
//Reemplaza solo EL CONTENIDO del elemento

//parrafo4.innerHTML = '<div class = "elemento">Este es un div</div>'

console.log(parrafo4.classList.contains("elemento"));
parrafo4.classList.add("elemento");

const cambiarColor = () => {
    parrafo2.classList.add("elemento")
}
cambiarColor();