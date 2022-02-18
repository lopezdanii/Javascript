//declaracion de una funcion sin parametros ni return
function nombreFuncion(){
    //codigo de la funcion


}

nombreFuncion() //llamada a esa funcion por su nombre y los parentesis

function square(){
    let num=2
    let sq=num*num
    console.log(sq)
}

square() //4

//funcion con parametros y return
function areaCircle(radio){
    let area=Math.PI*radio*radio
    return area
}

console.log(areaCircle(20))

//funcion con muchos parametros
function sumArrayValores(arr){
    let sum=0
    for(const i of arr){
        sum=sum + i
    }
    return sum
}

const numbers=[1,2,3,4,5,6,7]

console.log(sumArrayValores(numbers))


//funcion con parametros ilimitados
function sumAllNums() {
    console.log(arguments)
   }
   
   sumAllNums(1, 2, 3, 4) 
   // Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
   //devuelve un objeto con los argumentos



// function declaration
function sumAllNums2() {
     let sum = 0
     for (let i = 0; i < arguments.length; i++) {
       sum += arguments[i]
     }
     return sum
   }
   
   console.log(sumAllNums2(1, 2, 3, 4)) // 10
   console.log(sumAllNums2(10, 20, 13, 40, 10))  // 93
   console.log(sumAllNums2(15, 20, 30, 25, 10, 33, 40))  // 173
   //devuelve la suma de todos los argumentos pasados


 //funcion de flecha
 //al usar todos los argumentos con la funcion flecha no nos devuelve el objeto
 //lo que es mas comodo de usar
 const sumAllNums3 = (...args) => {
     console.log(args)
 }  
 sumAllNums3(1,2,3,4,5)

 const sumAllNums4 = (...args) =>{
     let sum=0
    for(const e of args){
        sum+=e
    }
    return sum
 }
 console.log(sumAllNums4(1,2,3,4,5,6))
 console.log(sumAllNums4(10,20,30))

//ANONYMOUS FUNCTION

const anonymousFun=function() {
    let sum= 2+2 
    console.log('Soy una funcion anonima, y hago una simple suma')
    return sum
}
console.log(anonymousFun())