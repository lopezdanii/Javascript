//Hay distintos metodos de manipular objetos
//Metodos de objeto: 
/* 
Object.assign
Object.keys
Object.values
Object.entries
hasOwnProperty()
*/

// 1 - Object.assign: copiar un objeto sin modificar el original

const person={
    firstName: 'Daniel',
    lastName: 'Lopez',
    country: 'Spain',
    city: 'Valladolid',
    skills: ['HTML', 'CSS','JS'],
    address:{
        street:'Avenida Ramon y Cajal',
        num: 12,
        city: 'Valladolid'
    },
    getPersonInfo: function(){
        return `Soy ${this.firstName} ${this.lastName}, y vivo en ${this.city}, ${this.country}`
    }

}
const copyPerson= Object.assign({}, person)
console.log(copyPerson)

// 2- Object.keys: para acceder las claves o propiedades de un objeto como un array
// que son 'firstName','lastName' , 'city' ...
const keys=Object.keys(copyPerson)
console.log(keys)//['firstName', 'lastName', 'country', 'city', 'skills', 'address', 'getPersonInfo']
const address=Object.keys(copyPerson.address)
console.log(address)//['street', 'num', 'city']

// 3- Object.values: obtiene los valores de un objeto como un array
const values= Object.values(copyPerson)
console.log(values)

//4- Object.entries : obtener la clave y su valor en un array
const entries=Object.entries(copyPerson)
console.log(entries)//Se muestra un numero de arrays del tipo [key,value]

//5- hasOwnProperty(): comprueba si el objeto contiene una determinada propiedad o key(clave)

console.log(copyPerson.hasOwnProperty('name'))//false
console.log(copyPerson.hasOwnProperty('city'))//true
