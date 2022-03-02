//creacion de un objeto vacio

const person={}

//creacion de objeto con valores

const rectangle= {
    legth: 20,
    width: 20
}

console.log(rectangle)

//acceder a valores desde un objeto

// a) Usar . seguido de el nombre clave si es solo una palabra
// b) usar corchetes y el nombre clave

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 50,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`
    },
    location: function(){
        return `${this.city}, ${this.country}`
    },
    'phone number': '+1125454545'
  }

  // accessing values using .
  console.log(person.firstName)
  console.log(person.lastName)
  console.log(person.age)
  console.log(person.location())
  console.log(person.sex)//undefined porque no existe

// value can be accessed using square bracket and key name
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['location()']) //undefined
console.log(person['location']) //f() {return ...}



// for instance to access the phone number we only use the square bracket method
console.log(person['phone number'])

//CREAR METODOS DE OBJETO
//La funcion getFullName es una funcion dentro del objeto person
//y se llama metodo del objeto


//INTRODUCIR NUEVOS VALORES PARA UN OBJETO
person.nationality='Ethiopian'
person.country='Finland'
person.skills.push('Meteor')
person.isMarried=true

person.getPersonInfo = function(){
    let skillsWithoutLastSkill=this.skills.splice(0,this.skills.length -1).join(', ')

let lastSkill = this.skills.splice(this.skills.length - 1)[0]

let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
let fullName = this.getFullName()
let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
return statement
}
console.log(person)
console.log(person.getPersonInfo())