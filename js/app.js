
'use strict';

let nombre = prompt("Por favor, ingresa tu nombre:");

alert("Hola, un gusto. " + nombre);

let meGustaBaskell = prompt("¿Me gusta el basketball? (si/no)");
console.log();
if (meGustaBaskell.toLowerCase() === 'si') {
    alert("Es verdad, si me gusta.");
    // console.log("Sabe que me gusta el baskell");
} else if (meGustaBaskell.toLowerCase() === 'no') {
    alert("Que pena, en verdad si me gusta");
    console.log("No sabe que me gusta el baskell");
}

let meGustaLeer = prompt("¿Me gusta leer? (si/no)");
if (meGustaLeer.toLowerCase() === 'si') {
    alert("Es verdad, si me gusta.");
    console.log("Sabe que me gusta leer");
} else if (meGustaLeer.toLowerCase() === 'no') {
    alert("Que pena, en verdad si me gusta leer");
    console.log("no sabe que");
} 

let meGustaElCine = prompt("¿Me gusta el cine? (si/no)");
if (meGustaElCine.toLowerCase() === 'si') {
    alert("Es verdad, si me gusta.");
    console.log("Sabe que me gusta el cine");
} else if (meGustaElCine.toLowerCase() === 'no'){
    alert("Que pena, en verdad si me gusta ver peliculas");
    console.log("No sabe que me gusta el cine")
}

let preguntaFinal = prompt("Si ya sabemos que me gusta y que no me gusta, dependiendo de eso, ¿Crees que soy alguien de ver futbol? (si/no)");
if (preguntaFinal.toLowerCase() === 'si') {
    alert("Pues no amigo/a, no veo partidos de futbol");
    console.log("Me conoce bien");
} else if (preguntaFinal.toLowerCase() === 'no'){
    alert("Perfecto, ya nos conocemos mejor");
    console.log("No me conoce muy bien");
}