//Ejercicio 5: Saludo personalizado 
//Enunciado: 
//Este ejercicio es ideal para familiarizarse con la manipulación de cadenas de 
//texto y la función prompt(). Escribe un programa que: 
//1. Solicite al usuario que ingrese su nombre. 
//2. Muestre un saludo personalizado usando el nombre ingresado. 
//Requisitos: 
//• Utiliza prompt() para recibir el nombre del usuario. 
// Muestra un mensaje utilizando concatenación de cadenas.

//COLOCAMOS EL PROMPT
const prompt = require("prompt-sync")({ sigint: true });
// Pedimos al usuario que ingrese su nombre y lo guardamos en una variable
let NombreUsuario = prompt("Por favor, ingresa tu nombre:");
//Lo imprimimos en la terminal
console.log("Hola, Bienvenida a ADA ITW:" + NombreUsuario);