//Metodos para manipular arrays
// Algunos de los metodos con los que trabajaremos seran:
//Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift

//1 - Array --> constructor de Arrays
const arr1=Array()
const empty8Array= Array(8) //crea un array con 8 elementos vacios
 console.log(empty8Array)

 //2 - fill --> rellena elementos del array con un valor estatico
 
 empty8Array.fill('0')
 //ahora el array vacio tendrá 8 elementos con valor '0' y no estara vacio
 console.log(empty8Array)
 

 //3 - concat --> concatena dos arrays
 const lista1=[1,2,3]
 const lista2=[4,5,6]
 const listaCompleta=lista1.concat(lista2)
 console.log(listaCompleta)


 //4 - length --> indica la longitud del array
 lista1.length // 3


 //5 - indexOf --> comprueba la existencia de un elemento en el array.
 //Si existe devuelve el indice del primer elemento que coincide, si no, devuelve -1
 console.log(listaCompleta.indexOf(6))//se encuentra en la posicion 5
let index3=listaCompleta.indexOf(3)
index3 !=-1 
? console.log('El numero ya se encuentra en la lista')
: console.log('El numero no esta en la lista')

//6 - lastIndexOf --> da la ultima posicion del elemento buscado en el array
//si no existe devolvera -1

const numbers=[1,2,3,4,5,4,3,2,1]
console.log(numbers.lastIndexOf(1))


//7 - includes --> comprueba si un elemento existe en un array
//si lo encuentra devuelve true, si no, devuelve false
console.log(numbers.includes(19))//false
console.log(numbers.includes(5))//true

//8 - isArray --> comprueba si los datos son un array
let index=numbers.length
console.log(Array.isArray(numbers)) //true, numbers es un array

//9 - toString --> convierte el array en una cadena
let nums=numbers.toString()
console.log(nums)
console.log(nums.charAt(2))
const names=['Daniel', 'Judas', 'Carlos']
console.log(names.toString())

// 10 - join --> une elementos del array en una cadena
const names2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names2.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names2.join('')) //AsabenehMathiasEliasBrook
console.log(names2.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names2.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names2.join(' # ')) //Asabeneh # Mathias # Elias # Brook

// 11 - slice --> cortar elementos del array en un rango
//el primer argumento es el inicio y el segundo el final sin incluirlo en el corte
const arrSlice=['Javier', 38, true, 'Gonzalez Hernandez','varon']
console.log(arrSlice.slice())//copia todos
console.log(arrSlice.slice(0))//copia todos
console.log(arrSlice.slice(0, numbers.length))//copia todos
console.log(arrSlice.slice(1,4))//desde la posicion 1 hasta la 4 sin contarla,
//es decir las posiciones 1,2 y 3: [38, true, 'Gonzalez Hernandez']


// 12 - splice --> elimina elementos del array
//posicion inicial, numero de elementos a eliminar y elementos a añadir
console.log(arrSlice.splice())
console.log(arrSlice.splice(0,1))
arrSlice=['Javier', 38, true, 'Gonzalez Hernandez','varon']
console.log(arrSlice.splice(3,2,'Gutierrez Martin', 'otro')) //se elimina 2 elementos desde la posicion 3,
//es decir se eliminan los apellidos y el sexo y se sustituyen por los valores que se incluyen como argumentos finales

console.log(arrSlice)
//el array final queda como : ['Javier', 38, true, 'Gutierrez Martin', 'otro']


// 13 - push(*element*) --> añade elemento al final del array
const arrPush=['item1','item2','item3']
arrPush.push('new item 4')
console.log(arrPush)
//['item1', 'item2', 'item3', 'new item 4']


// 14 - pop() --> elimina el ultimo elemento del array
arrPush.pop()
console.log(arrPush)

// 15 - shift() --> eliminar un elemento del principio
const arrShift=[1,2,3]
arrShift.shift()
console.log(arrShift)
// 16 - unshift(*element*) --> añadir un elemento en la primera posicion del array
const arrUnShift=[1,2,3]
arrUnShift.unshift(0)//AÑADE 0 en la primera posicion
console.log(arrUnShift)
arrUnShift.unshift(1)//añade 1 en la primera posicion
console.log(arrUnShift)//[1,0,1,2,3]


// 17 - reverse() --> revertir el orden del array
const arrAscendiente=[0,1,2,3,4]
const arrDescendiente= arrAscendiente.reverse()
console.log(arrDescendiente)

//18 - sort() --> ordenar los elementos del array en orden ascendiente
const arrABC=[3,6,1,3,6,7,6,9,3,2]
const arrNom=['Ana','Jacinta','Maria','Carlos','Oscar']
const arrABCOrdenado=arrABC.sort()
const arrNomOrdenado=arrNom.sort()
console.log(arrNomOrdenado)
console.log(arrABCOrdenado)
//['Ana', 'Carlos', 'Jacinta', 'Maria', 'Oscar']
//[1, 2, 3, 3, 3, 6, 6, 6, 7, 9]

