//Using prompt get the year the user was born and if the user is 18 or above allow the user
// to drive if not tell the user to wait a certain amount of years

let yearNac=parseInt(prompt('Enter birth year: '))
let edad= new Date().getFullYear() -yearNac 
edad >= 18
 ? console.log(`You are ${edad} years old. You are old enough to drive.`)
 : console.log(`You are ${edad} years old.You will be allowed to drive after ${18 - edad} years.`)
 