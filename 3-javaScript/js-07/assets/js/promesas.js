//Variable que simula datos pedidos
const saludo = "Hola mundo";

const datos = [
  {
    nombre: "Jonathan",
    apellido: "Vazquez",
  },
  {
    nombre: "Jonathan",
    apellido: "Vazquez",
  },
  {
    nombre: "Jonathan",
    apellido: "Vazquez",
  },
];
console.log(saludo);

//función  para simular una petición

function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (false) {
        resolve(datos);
      } else {
        reject("Nunca te quiso");
      }
    }, 2000);
  });
}

//forma 1
obtenerDatos()
  .then((datos) => {
    console.log("Forma 1");
    console.log(datos);
  })
  .catch((error) => {
    console.log(error);
  });

//forma 2 funciones asincronas - await async
async function funcionAsincrona() {
  console.log("Forma 2");
  try {
    const datos = await obtenerDatos();
    console.log(datos);
  } catch (error) {
    console.log(error);
  }
}

funcionAsincrona();
