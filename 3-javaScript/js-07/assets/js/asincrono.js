let num = 10;

console.log(num);

setTimeout( () =>{
    console.log("Hola");
}, 2000) ;

console.log(2);

console.log(3);

setTimeout( () =>{
    console.log("Adiós");
}, 0) ;

console.log(4);

for(let i = 0; i < 1000; i++){
    console.log("Estoy procesando");
}

console.log(5);
