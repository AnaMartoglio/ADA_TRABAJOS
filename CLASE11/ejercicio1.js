/*Ejercicio 1: ¿Positivo, negativo o cero? 
Consigna: 
Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa 
que le pida al usuario un número cualquiera. El programa deberá analizar si el 
número ingresado es positivo, negativo o cero. Utiliza estructuras if para 
resolverlo y muestra un mensaje explicativo en cada caso.*/

const prompt = require ("prompt-sync")({ sigint: true });

let numero = parseFloat(prompt("Ingresa un número: "));

let resultado = numero > 0 
    ? "El número es positivo." 
    : numero < 0 
        ? "El número es negativo." 
        : "El número es cero.";

console.log(resultado);


