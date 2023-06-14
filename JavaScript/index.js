console.log("Hola mundo!");
// Tipos de datos
// numericos
var pi = 3.1416;
console.log(pi);
//texto
var fecha_hoy = "Martes 6 de Junio de 2023";
var fecha_hoy_corta = "06/06/2023";
console.log(fecha_hoy);
// Boolean
var verdadero = true;
var falso = false;
var n1 = 5;
var n2 = 2;
console.log(n1 > n2);
// arrays
var frutas = ['manzana','plátano','pera','coco','melón'];
console.log(frutas);
// imprimimos un elementos del array se asocia con su posicion numerica empieza por 0
//plátano -> posicion 1
console.log(frutas[1], frutas[4]);
//propiedad que devuelve la cantidad de elementos de un array.
console.log(frutas.length);
// OPERADORES
// +: SUMA
// -: RESTA
// *: MULTIPLICACION
// /: DIVISION
// %: RESTO/MODULO
var num1 = 10;
var num2 = 5;
var suma = num1 + num2;
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var division = num1 / num2;
var modulo = num1 % num2;
console.log(suma, resta, multiplicacion, division, modulo);
// EX MILLAS MARINAS
// var millasmari = 1852;
// let numale = prompt("Dime las Millas Marinas",0);
// var resultado = numale * millasmari;
// console.log(resultado);
// CONCATENAR (SIMBOLO +)
// console.log(numale + "millas son" + resultado + "metros");

//CONCATENAR fecha
var dia = 06;
var mes = "junio";
var año = 2023;
console.log("Hoy es " + dia + " de " + mes + " de " + año);
// templates String ES6
console.log(`Hoy es ${dia} de${mes} de ${año} `);

//EX DESCUENTO

var precio_original = 90;
var precio_pagado = 74;
var descuento = precio_original-precio_pagado;
console.log(`El descuento es de ${descuento}€`);
var descuento_porcentaje = descuento * 100 / precio_original;
var descuento_porcentaje_2_decimales = descuento_porcentaje.toFixed();
console.log(`El descuento en porcentaje es de ${descuento_porcentaje_2_decimales}%`);
// SEGUNDOS
var segundos = 3600;
var minutos = segundos / 60;
var horas = minutos / 60;
console.log(`${segundos} segundos es igual a 
${minutos} minutos o 
${horas} horas`);

// OPERADORES DE COMPARACIÓN
// Operador    Descripcion
// ==          Igual a ... 
// ===         Igual a ... y mismo tipo 
// != ó <>     Diferente a ... 
// !==         Diferente a ... y diferente tipo 
// >           Mayor a ... 
// <           Menor a ... 
// >=          Mayor o igual a ... 
// <=          Menor o igual a ...

// Ejemplos 
console.log(5 == 5); // true
console.log(5 == 6); // false
console.log(5 == "5"); // true
console.log(5 === 5); // true
console.log(5 === "5"); // false
console.log(5 != 5); // false
console.log(5 != "5"); // false
console.log(5 !== "5"); // true
console.log(5 > 5); // false
console.log(5 >= 5); // true
console.log(5 < 5); // false
console.log(5 <= 5); // true

// OPERADORES LOGICOS 
// Operador    Descripcion
// &&              AND: Devuelve un TRUE si todas las comparaciones se cumplen 
// ||              OR: Devuelve un TRUE si ALGUNA de las comparaciones se cumple
// !               NOT: Invierte el estado Booleano
console.log(5 == 5 && 6 == 6);//true
console.log(5 == 5 && 6 == 5);//false
console.log(5 == 5 || 6 == 5);//true
console.log(5 === "5" || 6 == 5);//false
var comparacion = (5 == 5);
console.log(!comparacion);
// CREA UNA VARIABLE QUE CONTENGA LOS MESES DEL AÑO E IMPRIMIR POR CONSOLA EL MES ACTUAL
console.log("hola que tal");
var meses = ["nulo", "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
console.log(`estamos en ${meses [6]}`);
var mes_numero = prompt("Dime el mes actual en numero");
alert (meses[mes_numero]);