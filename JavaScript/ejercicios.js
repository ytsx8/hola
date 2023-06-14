// Ejercicio 1: Pedir nombre, apellido1, apellido2, edad, dirección y dni y mostrar una frase formateada con toda la información.
// var nombre = prompt("Dime tu nombre");
// var apellido1 = prompt("Dime tu primer apellido");
// var apellido2 = prompt("Dime tu segundo apellido");
// var edad = prompt("Dime tu edad");
// var direccion = prompt("Dime tu dirección");
// var dni = prompt("Dime tu dni");
// var mensaje = `Mi nombre es ${nombre} ${apellido1} ${apellido2}. Tengo ${edad} años. Vivo en la calle ${direccion}. Mi dni es ${dni}.`;
// alert(mensaje);
 
// // Ejercicio 2: Rehacer el ejercicio 1 pero definiendo de base la información en un array.
// var nombre = prompt("Dime tu nombre");
// var apellido1 = prompt("Dime tu primer apellido");
// var apellido2 = prompt("Dime tu segundo apellido");
// var edad = prompt("Dime tu edad");
// var direccion = prompt("Dime tu dirección");
// var dni = prompt("Dime tu dni");
// var datos = [nombre, apellido1, apellido2, edad, direccion, dni];
// var mensaje = `Mi nombre es ${datos[0]} ${datos[1]} ${datos[2]}. Tengo ${datos[3]} años. Vivo en la calle ${datos[4]}. Mi dni es ${datos[5]}.`;
// alert(mensaje);
 
// Ejercicio 3: Pedir la información del ejercicio 1 y almacenarla de forma dinámica en un array.
// inicializaciones de variables a un determinado tipo
// var texto = "";
// var numero = 0;
// var datos = [];
// datos[0] = prompt("Dime tu nombre");
// datos[1] = prompt("Dime tu apellido 1");
// datos[2] = prompt("Dime tu apellido 2");
// datos[3] = prompt("Dime tu edad");
// datos[4] = prompt("Dime tu direccion");
// datos[5] = prompt("Dime tu dni");
// alert(datos);
// otra manera -> método PUSH()
// datos.push(prompt("Dime tu nombre"));
// ...


// CONCEPTO new Array
// var cars = new Array("Saab", "Volvo", "BMW");
// lo mismo
// var cars = ["Saab", "Volvo", "BMW"];

// var texto = "Hola";
// var texto = new String("Hola");

// EX MILLAS MARINAS
// var millasmari = 1852;
// let numale = prompt("Dime las Millas Marinas",0);
// var resultado = numale * millasmari;
// console.log(resultado);
// CONCATENAR (SIMBOLO +)
// alert(numale + " millas son " + resultado + " metros ");


//NUMERO ALEATORIO CON OPERACIONES
// var num1 =Number(prompt ("Dime un numero aleatorio"));
// var num2 =Number(prompt ("Dime un otro numero aleatorio"));
// var suma =(num1 + num2);
// var resta = num1 - num2;
// var multiplicacion = num1 * num2;
// var division = num1 / num2;
// var modulo = num1 % num2;
// alert(`la suma da ${suma}
// la resta da el resultado ${resta}
// la multiplicacion da el resultado ${multiplicacion}
// la division da el resultado ${division}
// el resto es ${modulo}`);

//MEDIANA

// var texto = "";
// var numero = 0;
// var datos = [];
// datos[0] = Number(prompt("Nota 1"));
// datos[1] = Number(prompt("Nota 2"));
// datos[2] = Number(prompt("Nota 3"));
// datos[3] = Number(prompt("Nota 4"));
// datos[4] = Number(prompt("Nota 5"));
// var media = Number(datos[0] + datos[1] + datos[2] + datos[3] + datos[4])
// console.log(media);
// var result = Number(media/5)
// console.log(result);
// alert(`Las notas introduciodas son: ${datos[0]}, ${datos[1]}, ${datos[2]}, ${datos[3]}, ${datos[4]}
// La media es de ${result}`);

//EX MESES
// var meses = ["nulo", "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
// var mes_numero = prompt("Dime el mes actual en numero");
// alert (meses[mes_numero]);

// EX DIAS

var meses = ["nulo", "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
var dias = ["nulo"]; // ​​Ejercicio 1: Preguntar el número del día de la semana. Mostrar que dia es.

// Ejercicio 3: Preguntar al usuario en qué planta se encuentra: 0, 1, 2. A continuación preguntarle cuántos pisos quiere subir/bajar: 1 o 2. Indicarle en qué planta está, teniendo en cuenta que solo hay 3 plantas.
// var planta_actual = prompt("En que planta te encuentras?");
// switch (planta_actual) {
//     case "0":
//         var planta_destino = prompt("A que planta quieres subir? 1 - 2");
//         switch (planta_destino) {
//             case "1":
//                 alert("Te encuentras en la planta 1");
//                 break;
//             case "2":
//                 alert("Te encuentras en la planta 2");
//                 break;
//         }
//         break;
//     case "1":
//         var planta_destino = prompt("A que planta quieres ir? 0 - 2");
//         switch (planta_destino) {
//             case "0":
//                 alert("Te encuentras en la planta 0");
//                 break;
//             case "2":
//                 alert("Te encuentras en la planta 2");
//                 break;
//         }
//         break;
//     case "2":
//         var planta_destino = prompt("A que planta quieres bajar? 1 - 0");
//         switch (planta_destino) {
//             case "0":
//                 alert("Te encuentras en la planta 0");
//                 break;
//             case "1":
//                 alert("Te encuentras en la planta 1");
//                 break;
//         }
//         break;
// }
// ​​Ejercicio 1: Preguntar el número del día de la semana. Mostrar que dia es.
// Ejemplo: 1 -> Lunes
var dia = 4;
switch (dia) {
    case 1:
        console.log("Hoy es lunes");
        break;
    case 2:
        console.log("Hoy es martes");
        break;
    case 3:
        console.log("Hoy es miércoles");
        break;
    case 4:
        console.log("Hoy es jueves");
        break;
    case 5:
        console.log("Hoy es viernes");
        break;
    case 6:
        console.log("Hoy es sábado");
        break;
    case 7:
        console.log("Hoy es domingo");
        break;
    default:
        console.log("Dia incorecto");
        break;
}

// Ejercicio 2: Preguntar la edad. En función de esta mostrar:
// - Si tiene 0 -> Acabas de nacer
// - Si tiene más de 0 y menos de 18 -> Eres menor de edad
// - Si tiene 18 o más y menos de 65 -> Eres mayor de edad
// - Si tiene más de 65 -> Ya puedes jubilarte.
var edad = 12;
switch (true) {
    case edad === 0:
        console.log("Acabas de nacer");
        break;
    case edad > 0 && edad < 18:
        console.log("Eres menor de edad");
        break;
    case edad >= 18 && edad < 65:
        console.log("Eres mayor de edad");
        break;
    case edad > 65:
        console.log("Ya puedes jubilarte");
        break;
    default:
        console.log("Edad errónea");
        break;
}

// Ejercicio 3: Preguntar al usuario en qué planta se encuentra: 0, 1, 2. A continuación preguntarle cuántos pisos quiere subir/bajar: 1 o 2. Indicarle en qué planta está, teniendo en cuenta que solo hay 3 plantas.
// var planta_actual = prompt("En que planta te encuentras?");
// switch (planta_actual) {
//     case "0":
//         var planta_destino = prompt("A que planta quieres subir? 1 - 2");
//         switch (planta_destino) {
//             case "1":
//                 alert("Te encuentras en la planta 1");
//                 break;
//             case "2":
//                 alert("Te encuentras en la planta 2");
//                 break;
//         }
//         break;
//     case "1":
//         var planta_destino = prompt("A que planta quieres ir? 0 - 2");
//         switch (planta_destino) {
//             case "0":
//                 alert("Te encuentras en la planta 0");
//                 break;
//             case "2":
//                 alert("Te encuentras en la planta 2");
//                 break;
//         }
//         break;
//     case "2":
//         var planta_destino = prompt("A que planta quieres bajar? 1 - 0");
//         switch (planta_destino) {
//             case "0":
//                 alert("Te encuentras en la planta 0");
//                 break;
//             case "1":
//                 alert("Te encuentras en la planta 1");
//                 break;
//         }
//         break;
// }["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
// var mes_numero = prompt("Dime el mes actual en numero");
// var dia_num = prompt("Dime el dia actual en numero");
// alert ("Hoy " + "es " + (dias[dia_num]) + " de " + (meses[mes_numero]));

// Ejercicio 1: Preguntarle al usuario cuántos números quiere introducir.
// Después preguntarle ese número de veces, otro número y cuando sea par y mayor que 0 indicarlo.

// var cantidad_numeros =Number(prompt('Cuantos numeros quieres introducir'));
// var numero = 0;
// cantidad_numeros = Number(cantidad_numeros);

// for (var i=0; i<cantidad_numeros; i++) {
//      numero =Number(prompt('Dime un numero'));
//      if (numero%2 === 0 && numero > 0) {

//          alert(numero  + ' es par y positivo');
//         }
// }
// Ejercicio 1.1: Igual que el ejercicio 1, pero almacenando los números en un array, y luego imprimir los números que son positivos y pares.

// var cantidad_numeros =Number(prompt('Cuantos numeros quieres introducir'));
// cantidad_numeros = Number(cantidad_numeros);
// var numero = 0;
// var array_numeros = [];
// FOR De ESCRITURA
// for (let i = 0; i < cantidad_numeros; i++) {
//     numero =Number(prompt('Dime un numero')); {
//     2 maneras de llenar un array
//     1- Push
//     array_numeros.push(numero)
//     2- nos aprovechamos de la iteracion de la i
//     array_numeros[i] = numero;
//     }
// }
// console.log(array_numeros);
// FOR DE LECTURA (RECORRE EL ARRAY)
// array_numeros.length nos devuelve la cantidad numerica de elemtos del array_numeros.
// for (var i=0; i<array_numeros.length; i++) {
//     if (array_numeros[i]%2 == 0 && array_numeros <0) {
//         alert(array_numeros + ' es par y positivo')
//     }
// }
// Ejercicio 2: Comprobar si un número introducido por el usuario es primo o no.
// Un numero  es primo si solamente es divisible entre 1 y el mismo
// var numero = Number(prompt('Dime un número y te diré si es primo o no'))
// // 7 (es primo)
// // 1,2,3,4,5,6,7
// var primo = true
// for (var i=2; i < numero ; i++) {
//     if (numero%i === 0) {
//         primo = false;
//         break;
//     }
// }
// if (primo) {
//    console.log(numero + ' es primo');
// } else {
//    console.log(numero + ' no es primo');
// }
// Ejercicio 3: Programa que pide un numero al usuario y la potencia a la que lo quiere elevar y mostrar el resultado.
var base = 3;
var exp = 4;
var potencia = 1
for (var i=0; i<exp; i++) {
    potencia = potencia * base;
    // potencia *= base;
}
console.log(potencia);
 
// Ejercicio 4: Desarrollar un programa que solicite la carga de 10 números e imprima la suma de los últimos 5 valores ingresados.
// var sumatorio = 0
// for (var i=0; i<10; i++) {
//     numero = Number(prompt('Dime un numero'));
//     if (i >= 5) {
//         sumatorio += numero;
//     }
// }
// alert(sumatorio)

// Ejercicio 5: Crear la tabla de multiplicar de 10 x 10.

for (var i=0; i<11;i++) {
    console.log(`10x${i}=${10*i}`);
}

// Ejercicio 6: Crear un tablero de ajedrez
var figuras =["torre","caballo","alfill","rey","reina","alfill","caballo","torre"]
document.write("<table>")
    for(var i=0; i<8; i++){ //tr
        document.write("<tr>")
        for(var j=0; j<8; j++){//td
            if ( (i+j) % 2 !== 0 ) {
                if (i===1 || i===6){

                    document.write("<td class='negra'>péon</td>")
                }else if (i==0 || i==7) {
                    document.write("<td class='negra'>"+figuras[j]+"</td>")

                }else {
                    document.write("<td class='negra'></td>")

                }
            }
            else {
                if (i===1 || i===6){

                    document.write("<td >péon</td>")
                }else if (i==0 || i==7) {
                    document.write("<td >"+figuras[j]+"</td>")

                }else {
                    document.write("<td ></td>")

                }
            }
        }
        document.write("</tr>")
    }
document.write("</table>")

// Ejercicio 7: Recrear la siguiente imagen.
var asteriscos = "";
for (var p=0; p<15; p++) {
    asteriscos += "*"
    console.log(asteriscos);
}

// Ejercicio 8: Preguntarle al usuario cuántos alumnos quiere introducir. Después, preguntar a cada alumno, su nombre y su nota. Imprimir los alumnos que estén suspendidos