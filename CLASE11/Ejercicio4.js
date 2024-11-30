/*Ejercicio 4: ¿Es par o impar? 
Consigna: 
Los números pueden ser pares o impares. Escribe un programa que le pida al 
usuario un número y determine si es par o impar. Muestra un mensaje 
explicativo indicando qué significa cada caso. */

const prompt = require("prompt-sync")({ sigint: true });

let numero = parseFloat(prompt("Ingresa un número: "));

let tipoDeNumero = numero % 2 === 0
      ? "El número es par."
      : numero % 2 === 1
      ? "El número es impar."
      : "El número es incorrecto.";

      console.log(tipoDeNumero);