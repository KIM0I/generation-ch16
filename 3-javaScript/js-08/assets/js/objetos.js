let x = 10;
console.log(x.length);

let persona={
    Nombre: "Juan",
    Apellido: "Reyes",
    Edad: 24,
    
    Correo: "usuario@servidor.com",
   /*  nombreCompleto: function(){
        return this.Nombre + " " + this.Apellido; */
    Idioma: "español",
    get leng (){
        return this.Idioma.toUpperCase();
    },
     set lang (lang){
this.Idioma = lang.toLowerCase();
}
    
}
console.log(persona.leng);
persona.lang = "ES";
console.log(persona.lang);
console.log(persona.Idioma);

persona.tel = "5555567890";


/* console.log(persona.nombreCompleto()); */
console.log(persona);

//for in

for (varPropiedad in persona){
    console.log(persona[varPropiedad]);
}

let personaString = JSON.stringify(persona);
console.log(personaString);

