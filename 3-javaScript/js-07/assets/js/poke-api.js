/* URL a consumir */
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/";

/* Elementos del DOM */
const imgPokemon = document.getElementById("img-pokemon");

const idPokemon = document.getElementById("id-pokemon");

const nombrePokemon = document.getElementById("nombre-pokemon");

const listaHabilidades = document.getElementById("lista-habilidades")

const listaTipos = document.getElementById("lista-tipos");

const formulario = document.getElementById("buscador-pokemon")
console.log(formulario);

/* Eventos */
formulario.addEventListener("submit",(e) => {
e.preventDefault(); //Detiene el evento y evita que cargue la página

const inputPokemon = document.getElementById("busca-pokemon");

const nuevaBusqueda = (urlPokemon += inputPokemon.value);
console.log(nuevaBusqueda);

obtenerPokemon(nuevaBusqueda)
} )


/* Funciones */
async function obtenerPokemon(url) {
  const respuesta = await fetch(url);
  const datos = await respuesta.json();

  /* console.log(datos);
  console.log(datos.forms[0].name);
  console.log(datos.abilities);
  console.log(datos.id);
  console.log(datos.types);
  console.log(datos.sprites.other["official-artwork"].front_default); */

  const pokemon = {
    nombre: datos.forms[0].name,
    habilidades: datos.abilities,
    id: datos.id,
    tipos: datos.types,
    imagen: datos.sprites.other["official-artwork"].front_default,
  };

  //Imagen, Nombre y ID
  imgPokemon.src = pokemon.imagen;
  idPokemon.textContent = `ID: ${pokemon.id}`;
  nombrePokemon.textContent = pokemon.nombre;

  //Habilidades con For

let template = ``;

for (let i = 0; i<pokemon.habilidades.length; i++){

  const nombreHabilidad =pokemon.habilidades[i].ability.name;
  
  template += `<li class="list-group-item">${nombreHabilidad}</li>`
}

//Tipos con ForEach

templateTipos = ``;

pokemon.tipos.forEach((tipo) => {
  const nombreTipo = tipo.type.name;

  templateTipos += `<li class="list-group-item">${nombreTipo}</li>` 
  
});

  
  //Para añadir elementos a la lista desde js usa backticks
listaHabilidades.innerHTML = template;
listaTipos.innerHTML = templateTipos;
}
