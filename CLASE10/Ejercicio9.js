/* Ejercicio 9: Cálculo del IMC: Escribe un programa que calcule el Índice de 
Masa Corporal (IMC).  
Pide al usuario que ingrese su peso y su altura, y muestra el IMC 
calculado. 
Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere 
Pista 2: La fórmula puede representarse asi: 
let imc = peso / (altura * altura); */

const prompt = require("prompt-sync")( { sigint: true } );

let peso = parseFloat(prompt("Ingresa tu peso: "));
let altura = parseFloat(prompt("Ingresa tu altura: "));

let imc = peso / (altura * altura);

console.log("Tu índice de masa corporal es: " + imc);
