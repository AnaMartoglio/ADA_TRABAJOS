/*Ejercicio 2: Semáforo inteligente 
Consigna: 
Vamos a programar un semáforo. Escribe un programa que le pida al usuario 
ingresar un color del semáforo: rojo, amarillo o verde. Dependiendo del color 
ingresado, el programa debe imprimir un mensaje con la acción 
correspondiente: 
• Rojo: "Alto, no puedes avanzar." 
• Amarillo: "Precaución, prepárate para avanzar." 
• Verde: "Avanza con seguridad." 
Si el usuario ingresa un color inválido, el programa debe mostrar un 
mensaje: "Color no reconocido, ingresa rojo, amarillo o verde." 
Utiliza un switch para resolver este ejercicio. */

const prompt = require ("prompt-sync")({ sigint: true });

let color = prompt("Ingresa uno de estos colores: Rojo, Amarillo o Verde: ");

switch (color) {
  case "Rojo":
    console.log("¡¡Alto, no puede pasar!!");
    break;
  case "Amarillo":
    console.log("Precaución, preparate para avanzar.");
    break;
  case "Verde":
    console.log("Avanza, pero por las dudas mira para ambos lados, nunca se sabe...");
    break;
    default:
      console.log("El color ingresado es invalido.");
}