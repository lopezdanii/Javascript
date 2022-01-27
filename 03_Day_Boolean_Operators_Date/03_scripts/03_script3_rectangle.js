//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))


let lengthRectangle=parseInt(prompt('Enter length of rectangle: '))
let widthRectangle=parseInt(prompt('Enter width of the rectangle'))

let areaRectangle=widthRectangle*lengthRectangle
let perimeterRectangle=2*(widthRectangle+lengthRectangle)
console.log(`The area of the Rectangle (${lengthRectangle},${widthRectangle}) is`, areaRectangle)
console.log(`The perimeter of the Rectangle (${lengthRectangle},${widthRectangle}) is`, perimeterRectangle)

