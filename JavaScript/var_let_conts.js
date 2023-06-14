var x = 5;
var x = 6;
if (x == 6) {
    console.log(x); // al cumplirse la cond, entra en el bloque
    var y = 2;
}
console.log(y);
// Declarar variables con let
let z = 8;
z = 8; // se puede modificar el let pero no el const
// let z = 4; // Identifier 'z' has already been declared
// 2- Scope local: si declaramos fuera del bloque, se puede leer dentro, pero no al contrario
if (z == 8) {
    console.log(z);
    let j = 4;
}
// console.log(j); //ReferenceError: j is not defined

// Declarar una variable con const
const PI = 3.14;
//PI = 3.15; // TypeError: Assignment to constant variable.