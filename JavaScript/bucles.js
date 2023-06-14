// Ejercicio 1 -> Declarar una variable numérica. Mostrar todos los números pares en formato decreciente.
// 1- INICIALIZACIÓN
// 2- COMPARACIÓN
// 3- ACTUALIZACIÓN
// var i = 10; // 1- INICIALIZACIÓN
// while (i > 0) { // 2- COMPARACIÓN

//     if (i % 2 == 0) { // es par
//         console.log(i);
//     }
//     if (i%2 == 1) { // es impar
//         console.log(i);
//     }
//     i = i - 1; // 3- ACTUALIZACIÓN
// }

// Ejercicio 2 -> Pedir al usuario nombre y dni, mínimo una vez. Seguir pidiéndolo mientras
// algún campo está vacío.
// var nombre = "";
// var dni = "";
// do {
//     nombre = prompt("Dime tu nombre")
//     dni = prompt("Dime tu DNI")
// } while (nombre == "" || dni == "");

// Ejercicio 3 -> Preguntarle al usuario cuántos números quiere introducir.
// Después preguntarle ese número de veces un número y cuando sea par y mayor que 0,
// indicarle que es par y positivo.
// var numeros = 0;
// var cuantos_numeros = prompt("Dime cuantos numeros quieres introducir")
// var i = cuantos_numeros;
// while (i > 0) {
//     numeros = prompt("Dime un numero")
//     if (numeros %2 == 0 && numeros > 0) {
//         alert (numeros + " es par y positivo");
//     }
//     i--;
// }

// Ejercicio 4 -> Crear un número e ir sumando ese número hasta que llegue a 100.
// Mostrando su estado y viendo al final el número de veces que ha sido necesario
// sumar hasta llegar a 100.
// 1- CONTADOR
// 2- ACUMULADOR
var sumatorio = 0;
var contador = 0;
var numero = 25;
while (sumatorio <= 100) {
    contador++;
    sumatorio = sumatorio + numero;
    console.log(sumatorio);
}
console.log("Ha dado " + contador + " vueltas");
// ACUMULADOR
// EJEMPLO CON LATAS DE COCACOLA DE 33cl
// var recipiente = 0;
// var i = 10;
// while (i > 0) {
//     recipiente = recipiente + 33;
//     i--;
// }
// console.log(recipiente);

// Ejercicio 5 -> Algoritmo que va leyendo números enteros desde el teclado hasta
// que se introduzca un número múltiplo de 7. La salida por pantalla ha de ser la suma de
// todos los números impares y positivos leídos sin contar el último
document.write("<h1>Tabla 4x4 con JS</h1>");
// el primer while se encarga de crear los 4 <tr>
document.write("<table>");
// tr
var i = 0;
while (i < 4) {
    document.write("<tr>");
    // td
    var j = 0;
    while (j < 4) {
        document.write("<td>fila "+(i+1)+" col "+ (j+1) + "</td>");
        j++;
    }
    document.write("</tr>");
    i++;
}
document.write("</table>");

document.write("<h1>Tabla 4x4 con js y prompt</h1>");
document.write("<table>");
// tr
// var filas = prompt("Dime el numero de filas")
// var cols = prompt("Dime el numero de columnas")
// var i = 0;
// while (i < filas) {
//     document.write("<tr>");
//     // td
//     var j = 0;
//     while (j < cols) {
//         document.write("<td>fila "+(i+1)+" col "+ (j+1) + "</td>");
//         j++;
//     }
//     document.write("</tr>");
//     i++;
// }
// document.write("</table>");

// CREAR UNA LISTA DINAMICA DE LENGUAJES DE PROGRAMACION
 document.write("<h1>lista lenguajes de programacion</h1>")
// document.write("<br>")
// document.write("<ol>")
// var i = 9;
// while(i > 0) {
//     var lengprog =prompt("Dime un lenguaje de programacion (max.9)")
//     document.write("<li>" + lengprog + "</li>")
//     i--;
// }

// document.write("</ol>")
// var leng_prog_array = ["JavaScrypt", "Phyton", "Rust", "C", "ASP", "C++", "C#", "Java"]
// Creamos un array dinamico y hacemos una salida con una tecla en especifico
// var leng_prog_array = []
// var leng_prog_string = "";
// do {
//      leng_prog_string = prompt("Dime un lenguaje de programacion. Pulsa 'X' para salir.");
//      if (leng_prog_string === "x") {
//         break;
//      }
//      leng_prog_array.push(leng_prog_string);
// } while (true);
// console.log(leng_prog_array);
// document.write("<ol>")
// var i = 0;
// while (i < leng_prog_array.length) {
//     document.write("<li>"+ leng_prog_array[i] + "</li>");
//     i++;
// }
// document.write("</ol>");

// AÑADIR NOTAS HASTA DETECTAR QUE EL DATO NO ES NUMERICO
// var nota = 0;
// var array_nota = [];

// do {
//     var nota = Number(prompt("Dime una nota (salir: dato no numerico)"));
//     //isNaN(): DEVUELVE UN TRUE SI NO ES UN NUMERO
//     if (isNaN(nota)) {
//         break;
//     }
//     array_nota.push(nota);
// } while (true); 
// var i = 0;
// var cont= 0;
// while (i < array_nota.length) {
//     if (array_nota[i] >=5) {
//         cont++;
//     }
//     i++;
// }
// alert("Hay " + cont + " aprobados.");

// USANDO EL FOR IMPRIMIMOS POR CONSOLA LOS NUMEROS IMPARES DEL 10 AL 20 
for (var i = 10; i <= 20 ; i++) {
    if (i%2 !== 0) {
        console.log(i + " Es impar");
    }
    // else {
    //     console.log(i + " Es par");
    // }
}

// IMPRIMIR POR CONSOLA LOS TEXTOS CONCATENADOS DEL ARRAY
var array_nombre = ["Hola", "me", "llamo", "Alex"];
var acumulador_texto = "";
for (let i = 0; i < array_nombre.length; i++) {
    const texto = array_nombre[i];
    acumulador_texto += texto + " ";
}
console.log(acumulador_texto);

// CREAR UN BUSCADOR. PEDIR AL USUARIO EL CODIGO DEL CURSO, Y DEVOLVER UN SI ESTA DISPONIBLE O NO ESTAA DISPONIBLE EN BASE AL ARRAY DEFINIDO ANTERIORMENTE.
var pregunta_curso_alumno = "ifcd0100";
var array_cursos_cief = ["IFCD0110", "IFCD0111", "IFCD0103", "IFCD0112", "IFCD0210"];
pregunta_curso_alumno = pregunta_curso_alumno.toUpperCase();
if (array_cursos_cief.includes(pregunta_curso_alumno)) {
    console.log("El curso " + pregunta_curso_alumno + " está disponible");
} else {
    console.log("El curso " + pregunta_curso_alumno + " no está disponible");
}