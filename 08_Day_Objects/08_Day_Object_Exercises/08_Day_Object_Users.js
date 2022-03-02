
//Del objeto users realizar varias operaciones

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

//Buscar la persona que tiene más habilidades(skills)
let contadorLoggedIn=0
let contadorLoggedOut=0
let contadorUsers50Points=0
let personManySkills
let numOfSkills=0
const arrUsersMERN=[]

for(const i of Object.entries(users)){
  //Contar los usuarios loggeados
  if(i[1].isLoggedIn==true){
      contadorLoggedIn++
  }/* Alternativa para los que no estan loggeados
  
  else{
      contadorLoggedOut++
  }*/
  //contar los usuarios que tienen mas de 50 puntos
  if(i[1].points >=50){
      contadorUsers50Points++
  }
  let copySkills=Object.assign({},i[1].skills)
  console.log(`skills de ${i[0]} = ${Object.values(copySkills).length/*i[1].skills.length*/}`)
  
//Encontrar que usuarios son MERN stack developer
let listaMERN=['MongoDB','Express','React','Node']
if(i[1].skills.includes('MongoDB','Express','React','Node')){
  arrUsersMERN.push(i[0])
  
}

  //encontrar la personas que tiene más skills
  if(numOfSkills<=Object.values(copySkills).length){
      numOfSkills=Object.values(copySkills).length
      personManySkills=i[0]
  }


  
}
console.log(`La persona con mas skills es ${personManySkills}`)
console.log(`${arrUsersMERN} son MERN stack developers`)
contadorLoggedOut=Object.entries(users).length-contadorLoggedIn

console.log(`Hay ${contadorLoggedIn} usuarios loggeados`)
console.log(`Hay ${contadorLoggedOut} usuarios no loggeados`)
console.log(`Hay ${contadorUsers50Points} usuarios con 50 puntos o mas`)
