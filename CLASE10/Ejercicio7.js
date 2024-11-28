/*Ejercicio 7 - Intercambio de Valores: Declara dos variables con valores 
iniciales y luego intercambia sus valores. Muestra los valores antes y 
después del intercambio en la consola. 
Para intercambiar valores puedes usar varios métodos(usando una 
variable temporal, aritmética o asignación simultanea), eres libre de 
elegir el que desees, eso si, investiga sobre el que usaras.*/

let dia = "Jueves";
let mes = 11;

console.log("Antes del intercambio: ");
console.log("Día = ", dia, "Mes =", mes );

let temporal = dia;
dia = mes;
mes = temporal;

console.log("después del intercambio: ");
console.log("Día= ", dia, "mes =", mes);