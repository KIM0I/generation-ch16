//Manejador de eventos
function saludar() {
    alert("Hola")
}

//addEventListener ()
const boton = document.getElementById("boton");
console.log(boton);

boton.addEventListener("click", (evento) =>{
  //alert("Hola")
   console.log(evento.target);
});

const formulario = document.getElementById("form");

formulario.addEventListener("submit", (e)=>{
e.preventDefault();
alert(formulario[0].value)
});