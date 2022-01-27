// Calcula el número de segundos que ha vivido una persona 
//a partir de los años que tiene

let edad=parseInt(prompt('Enter your age'))
let secondsPerYear=3600*24*365
let secondsLived=edad*secondsPerYear
console.log(`You have lived ${secondsLived} seconds.` )