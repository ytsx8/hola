// var mi_nombre = 'Alex';
//     if (mi_nombre == 'Alex') {
//         console.log("Nombre Correcto");
//     } else {
//         console.log("Nombre Incorrecto");
//     }

//Ex numeros 
// var n = 2;

// if (n >= 0) {
//     console.log(n + " es positivo");
// } else {
//     console.log(n + " es negativo");
// }

//EX NUMERO CONTANDO EL 0

// var num = 20;

// if (num === 0 ){
//     console.log(num + ", es 0");
// } else if (num > 0 ) {
//     console.log(num + ", es positivo");
// } else {
//     console.log(num + ", es negativo");
// } 

// EX DEL SEMAFORO
var semaforo = "Verde".toLowerCase();
    if (semaforo === "rojo") {
        console.log(" Esta en rojo no se puede pasar");
    }
    else if (semaforo === "ambar"){
        console.log(" Precaucion esta en Amarillo");
    }
    else if (semaforo ===("verde")) 
        {
        console.log(" Puedes pasar");
    } else {
        console.log(" Color erróneo introduce un color valido");
    }

// E-MAIL Y PASSWORD
var email_db = "test@test.com";
var pass_db = "qwerty";
var email_user = "test@test.com";
var pass_user = "qwerty";
    if (email_db === email_user && pass_db === pass_user) {
        console.log("Login correcto");
    }
    else {
        console.log("Login incorrecto");
    }

var numero_prefijo = "6";
    if (numero_prefijo === "6" || numero_prefijo === "7" || numero_prefijo === "9") {
        console.log("Numero correcto");
    }

// EJERCICIO
// NA (<5)
// AS (>=5, <7)
// AN (<=7, <9)
// AE (>=9)
var nota = "10";
    if (nota < 5 ) {
        console.log("Has suspendido mamon");
    } else if (nota >= 5 && nota < 7) {
        console.log("Has aprobado muy justo");
    } else if (nota >= 7 && nota < 9) {
        console.log("Has aprobado con nota, muy bien");
    } else if (nota >= 9 && nota <= 10) {
        console.log("Excelente");
    } else  {
        console.log("Nota incorreta tiene que ser menor que 10 y mayor de 0");
    }

//Ejercicio 1 -> Mostrar si un número es par o impar.
var numero_par_impar = "3"
    if (numero_par_impar%2 !=0){
        console.log("Es impar");
    }
    else {
        console.log("Es par");
    }
//Ejercicio 2 -> Introducir 3 números. Indicar si el tercero es la suma de los dos primeros o no.
var numb1 =Number (3);
var numb2 =Number (3);
var numb3 =Number (6);
    if (numb1 + numb2 != numb3  ){
        console.log("No es correcto");
    }
    else {
        console.log("Es correcto");
    }

//Ejercicio 3 -> Introducir día, mes, año (numéricos). Comprobar que sean correctos (año no excede del actual)
var dia1 =Number (28);
var mes1 =Number (7);
var año1 =Number (2023);
    if (dia1 <= 31 && dia1 > 0 && mes1 <= 12 && mes1 > 0 && año1 <= 2023 && año1 > 1920)  {
        console.log("Fecha correcta ");
    }
    else {
        console.log("Prporciona una fecha correcta");
    }

//Ejercicio 4 -> Introducir un precio a pagar y el dinero disponible y mostrar si le falta dinero, indicarle cuanto, si le sobra indicar cuánto y si esta justo mostrar gracias por la compra
var dinero =Number (7);
var precio =Number (7);
    if (dinero < precio) {
        console.log('te faltan ' +  (precio -dinero) + '€');
    }
    else if (dinero > precio) {
        console.log('te sobran ' +  (dinero - precio) + '€');
    }
    else if (dinero === precio ) {
        console.log("Tienes el dinero justo");
    }

// Ejercicio 5 -> Introducir 3 números. Ordenar descendentemente.
var descendiente = [1, 2, 3];

descendiente.sort(function(a, b){return b - a}); 
console.log(descendiente);

// Ejercicio 6 -> Comprobar letra DNI. (Si divides la parte numérica entre 23, el resto es la posición de este array)

var letras_dni = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
// datos que pedimos al usuario
var numeroDNI = 23456787;
var letraDNI = "A";
// calculos de la letra segun el array 
var posARRAYletra = numeroDNI%23;
var letraCalculada = letras_dni[posARRAYletra];
// comprobacion
if (letraDNI === letraCalculada) {
    console.log("Letra DNI correcta");
} else {
    console.log("Letra DNI incorrecta");
}