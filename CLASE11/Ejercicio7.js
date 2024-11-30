/*Ejercicio 7: Calculadora simple 
Consigna: 
Crea un programa que le pida al usuario dos números y una operación 
matemática a realizar: suma, resta, multiplicación o división. Según la operación 
ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario 
ingresa una operación inválida, el programa debe mostrar un mensaje de error. 
Usa switch para resolverlo. */

const prompt = require("prompt-sync")({ sigint: true });

let numero1 = parseFloat(prompt("Ingresa un Primer Número: "));
let numero2 = parseFloat(prompt("Ingresa un Segundo Número: "));

let OperacionMatematica = prompt("Ingresa la operación que deseas realizar: ");

switch (OperacionMatematica) {
  case "suma":
    console.log(numero1 + numero2);
    breack;
  case "resta":
    console.log(numero1 - numero2);
    break;
  case "multiplicacion":
    console.log(numero1 * numero2);
    break;
  case "division":
    console.log(numero1 % numero2);
    break;
}