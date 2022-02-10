//Un array puede almacenar multiples valores
//cada valor tiene un indice, y cada indice tiene una referencia a una direccion de memoria
//se puede acceder a cada valor a partir de sus indices
//el indice empieza en 0 y llega hasta el indice del ultimo elemento que es la longitud -1

//construccion de array
const arr=Array()

let arr2= new Array()

let arr3= []

//ejemplos

const numbers=[0,Math.PI, 9.81, 37, 98.6,100]
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongoDB']
console.log('Numbers:', numbers)
console.log('Number of numbers: ', numbers.length)

// un array puede tener objetos de distinto tipo de dato
const arr4=[
    'Daniel',
    21,
    true,
    {country: 'Spain', city:'Valladolid'},
    {skills:['HTML','CSS','JS','C']} 
]
console.log(arr4)

//se puede crear un array usando el metodo split de los string
let js='JavaScript'
const charsInJavaScript=js.split('')
console.log(charsInJavaScript)

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
