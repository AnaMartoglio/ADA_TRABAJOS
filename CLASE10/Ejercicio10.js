/* Ejercicio 10 - Cálculo de Descuento: Escribe un programa que calcule el 
precio final de un producto después de aplicar un descuento. Pide al 
usuario que ingrese el precio original y el porcentaje de descuento, y 
muestra el precio final. 
Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere 
Pista 2: La fórmula puede representarse asi: 
let montoDescuento = precioOriginal * (porcentajeDescuento / 100); */ 

const prompt = require ("prompt-sync")( { sigint: true });

let precioOriginal= parseFloat (prompt("Ingresa el precio del producto: "));
let porcentajeDescuento = parseFloat(prompt("Ingresa el porcentaje de descuento del producto: "));

let precioFinal = precioOriginal * (porcentajeDescuento / 100);

console.log("El precio final del producto que desea llevar es: " + precioFinal);