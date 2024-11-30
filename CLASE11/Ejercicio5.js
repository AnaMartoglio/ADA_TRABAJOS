/*Ejercicio 5: Encuentra los números pares entre dos valores 
Consigna: 
Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El 
programa debe mostrar todos los números pares que se encuentran entre esos 
dos valores, incluyendo los límites si son pares. Utiliza un ciclo for para recorrer 
los números entre el inicio y el fin. Si el número inicial es mayor que el final, el 
programa debe mostrar un mensaje indicando que los valores son inválidos.*/

const prompt = require("prompt-sync")({ sigint: true });

let NumeroInicio = parseFloat(prompt("Ingresa un número para iniciar: "));
let NumeroFinal = parseFloat(prompt("Ingresa un número para finalizar: "));

if (NumeroInicio > NumeroFinal) {
  console.log("Error: el número Inicial no puede ser mayor que el número fianl.");
} else { 
  for (let i = NumeroInicio; i <= NumeroFinal; i ++) {
     if (i % 2 === 0) {
      console.log("Número par: " + i);
     }
  }

}
