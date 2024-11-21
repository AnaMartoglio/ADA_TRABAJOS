//Ejercicio 3: Suma de dos números ingresados por el usuario 
//Enunciado: 
//Este ejercicio te ayudará a practicar la entrada de datos y el uso de operadores 
//aritméticos. Escribe un programa que: 
//1. Pida al usuario que ingrese dos números. 
//2. Sume ambos números. 
//3. Muestre el resultado de la suma. 
//Requisitos: 
//• Utiliza prompt() para recibir los números. 
//• Utiliza parseFloat() para convertir las entradas a números. 
//• Almacena los resultados en variables adecuadas y muestra el resultado.

//COLOCAMOS EL PROMPT
const prompt = require("prompt-sync")({ sigint: true });
// Pedimos al usuario que ingrese un número y lo guardamos en una variable
let numero1 = prompt("Por favor, ingresa un número:");
let numero2 = prompt("Por favor, ingresa un número:");
// Convertimos el valor ingresado a un número
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

//sumamos
let suma = numero1 + numero2;

//mostrar el resultado en la consola

console.log ("El resultado de la suma de sus número es:" + suma);

