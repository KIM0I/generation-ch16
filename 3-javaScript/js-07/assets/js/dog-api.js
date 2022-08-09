//URLs para consumir
const urlAleatorios = "https://dog.ceo/api/breeds/image/random"

//Elementos del DOM
const imagenPerrito = document.getElementById("imgPerrito")
console.log(imagenPerrito);

const btn = document.getElementById("botonPerrito")

//eventos
btn.addEventListener("click", () => {
    console.log("Boton Presionado");
    //agregar funcionalidad
    obtenerPerritoAleatorio(urlAleatorios)
})



async function obtenerPerritoAleatorio(url){
    const respuesta = await fetch(url)
    const datos = await respuesta.json()

    console.log(datos);
    console.log(datos.message);
    console.log(datos.status);

    imagenPerrito.src= datos.message
}
obtenerPerritoAleatorio(urlAleatorios)