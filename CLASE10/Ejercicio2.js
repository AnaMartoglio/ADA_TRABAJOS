//Ejercicio 2 – Usando las variables:  
//Escribe un programa que pida al usuario que ingrese su nombre, su 
//edad y su peso, y luego muestre un mensaje personalizado que incluya 
//toda esta información. 
//Desglosando el ejercicio deberás: 
//1. Pide al usuario que ingrese su nombre. 
//2. Pide al usuario que ingrese su edad. 
//3. Pide al usuario que ingrese su peso. 
//4. Muestra un mensaje personalizado que incluya el nombre, la edad 
//y el peso del usuario. 
//Pista: En el ejercicio anterior, declaramos valores en las variables. 
//Ahora nos toca pedir datos al usuario, por lo que usaremos prompt
//sync para solicitar esta información.

const prompt = require ("prompt-sync") ( { sigint: true } );

let nombre = prompt("Por favor, ingrsa tu nombre: ");
let edad = parseFloat(prompt("Por favor, ingresa tu edad: "));
let peso = parseInt(prompt("Por favor, ingresa tu peso: "));

console.log(nombre, edad, peso);