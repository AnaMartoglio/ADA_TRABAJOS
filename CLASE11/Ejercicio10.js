/*Ejercicio 10: Adivina el número 
Consigna: 
Crea un programa donde la computadora seleccione un número al azar entre 1 
y 10. Luego, pide al usuario que adivine el número hasta 3 intentos. Si el usuario 
acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén 
los intentos restantes. Si no acierta después de los 3 intentos, muestra el 
número secreto. Usa un for para resolver este ejercicio.*/

const prompt = require ("prompt-sync")({ sigint: true });

let numeroAlAzar = Math.floor(Math.random() * 10 ) + 1;

let adivinaste = false;

for (let intento = 1; intento <= 3; intento ++) {
  let NumeroUsuario = parseInt(prompt("Intento: " + intento + "Adivina el número entre 1 y 10: "));

  if (NumeroUsuario === numeroAlAzar) {
    console.log("Felididades Adivinaste!! te ganaste un auto 0km.");
    adivinaste = true;
    break;
  } else if (intento < 3) {
    console.log("Incorrecto, intenta nuevamente.");
  }
}

if (!adivinaste) {
  console.log("Seguí participando en futuras oportunidades.");
}