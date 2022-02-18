//Expresion function son funciones anonimas
//para expresarla se pone el nombre de la variable y los parentesis con los argumentos de la funcion 
const square=function(n) {
    return n*n
}
console.log(square(2))

//FUNCIONES INVOCANDOSE A SI MISMAS
//cuadrado de 2
(function(n){
    console.log(n*n)
})(2)

//cuadrado de 100
let numCuadrado= (function(n){
    console.log(n*n)
})(10)
console.log(numCuadrado)

//funcion de flecha o Arrow Function utiliza la flecha como declaracion
//en lugar de la palabra function
const square= n =>{
    return n*n
}
//se puede escribir en una linea tambien con el return explicito
const square2= n => n*n

//y llamamos a la funcion
console.log(square(2))
console.log(square2(2))

//algunos ejemplos:
const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
      newArr.push(element.toUpperCase())
    }
    return newArr
  }
  
  const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
  console.log(changeToUpperCase(countries))
  
  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
 
  
  const printFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
  }
  
  console.log(printFullName('Asabeneh', 'Yetayeh'))
