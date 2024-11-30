/*Ejercicio 8: Encuentra los múltiplos de un número 
Consigna: 
Escribe un programa que le pida al usuario un número entero positivo y 
muestre todos los múltiplos de ese número entre 1 y 100. Utiliza un ciclo for 
para resolverlo. */

const prompt = require("prompt-sync")({ sigint: true });

let NumeroEnteroPositivo = parseFloat(prompt("Ingresa un número entero positivo: "));

console.log("Los múltiplos de " + NumeroEnteroPositivo + " Son: " );

for (let i=1; i <= 100; i ++) {
    if (i % NumeroEnteroPositivo === 0) {
      console.log(i);
    }
}