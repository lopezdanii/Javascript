//1- comprobar si typeof '10' es igual a 10
let cadNum='10'
let num1=10
console.log(`${typeof(cadNum)==typeof(num)}`) //compruebo si los tipos son iguales
console.log(`${cadNum==num1}`) //compruebo si los valores son iguales

//llos tipos son distintos pero su valor si da lo mismo

//2-  comprobar si parseFloat('9.8') es igual a 10
let pFL=parseFloat('9.8')
console.log(pFL) // 9.8 no es igual
if(pFL != 10){
    pFL=Math.ceil(pFL)
    console.log(pFL)
}