// '==' significa igual en valor unicamente
//'===' significa igual en tipo de dato y valor
console.log(3=='3') //--> sale true, pues los dos tienen el mismo valor
console.log(3==='3')//--> sale false, no tienen el mismo tipo de datos


console.log(NaN == NaN)//--> false
console.log(NaN === NaN)//--> false
//Un valor que no es cierto con '==', no será cierto con '==='


console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same

console.log(undefined == null)  // true
console.log(undefined === null) // false


//Logical Operators
//The following symbols are the common logical operators: &&(ampersand) , ||(pipe) and !(negation). The && operator gets true only if the two operands are true. The || operator gets true either of the operand is true. The ! operator negates true to false and false to true.

// && ampersand operator example

const check = 4 > 3 && 10 > 5         // true && true -> true
const check2 = 4 > 3 && 10 < 5         // true && false -> false
const check3 = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example

const check4 = 4 > 3 || 10 > 5         // true  || true -> true
const check5 = 4 > 3 || 10 < 5         // true  || false -> true
const check6 = 4 < 3 || 10 < 5         // false || false -> false

//! Negation examples

let check7 = 4 > 3                     // true
let check8 = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false


//Operador de incremento/decremento
//Puede ser antes o despues

let contador1=0
console.log(++count) // 1
console.log(count) // 1

let contador2=0
console.log(count++) // 0
console.log(count) // 1
