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
var edad = 70;
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
var planta_actual = prompt("En que planta te encuentras?");
switch (planta_actual) {
    case "0":
        var planta_destino = prompt("A que planta quieres subir? 1 - 2");
        switch (planta_destino) {
            case "1":
                alert("Te encuentras en la planta 1");
                break;
            case "2":
                alert("Te encuentras en la planta 2");
                break;
        }
        break;
    case "1":
        var planta_destino = prompt("A que planta quieres ir? 0 - 2");
        switch (planta_destino) {
            case "0":
                alert("Te encuentras en la planta 0");
                break;
            case "2":
                alert("Te encuentras en la planta 2");
                break;
        }
        break;
    case "2":
        var planta_destino = prompt("A que planta quieres bajar? 1 - 0");
        switch (planta_destino) {
            case "0":
                alert("Te encuentras en la planta 0");
                break;
            case "1":
                alert("Te encuentras en la planta 1");
                break;
        }
        break;
}