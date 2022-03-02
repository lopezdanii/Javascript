
//Crear un objeto que tenga características propias de un perro

const dog={}
console.log(dog)

dog.name= 'Tom'
dog.legs= 4
dog.color= 'Anaranjado'
dog.age= 5
dog.bark=function(){
    return 'guau guau'
}
const name=dog.name
const legs=dog.legs
const age=dog.age
const color=dog.color
const bark=dog.bark()

console.log(name)
console.log(age)
console.log(dog.bark())
console.log(bark)

dog.breed= 'Akita Inu'
dog.getDogInfo=function(){
    return `${this.name} es un perro de raza ${this.breed}, de ${this.age} años que dice: ${this.bark()}`
}
console.log(dog)
console.log(dog.getDogInfo())
