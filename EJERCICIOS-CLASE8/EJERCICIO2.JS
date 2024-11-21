//Ejercicio 2: Verificar si un número es positivo, negativo o cero 
//Enunciado: 
//En este ejercicio, practicarás el uso de condicionales (if, else). Escribe un 
//programa en JavaScript que: 
//1. Pida al usuario que ingrese un número. 
//2. Verifique si el número es positivo, negativo o igual a cero. 
//3. Muestre un mensaje indicando cuál es el caso. 
//Requisitos: 
//• Utiliza una estructura de control de flujo (if, else if, else) para hacer las 
//verificaciones. 
//• Usa parseFloat() para convertir la entrada del usuario a un número. 

//COLOCAMOS EL PROMPT
const prompt = require("prompt-sync")({ sigint: true });
// Pedimos al usuario que ingrese un número y lo guardamos en una variable
let numero = prompt("Por favor, ingresa un número:");
// Convertimos el valor ingresado a un número
numero = parseFloat(numero);
// Verificamos si el número es positivo, negativo o cero
if (numero > 0) {
  console.log("El número es positivo.");
} else if (numero < 0) {
  console.log("El número es negativo.");
} else {
  console.log("El número es cero.");
}
