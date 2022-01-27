//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

let ladoA= prompt('Enter length of side A:')
let ladoB= prompt('Enter length of side B:')
let ladoC= prompt('Enter length of side C:')

let perimeterTriangle=parseInt(ladoA)+parseInt(ladoB)+parseInt(ladoC)

console.log(`The perimeter of the triangle (${ladoA},${ladoB},${ladoC}) is ${perimeterTriangle}`)
