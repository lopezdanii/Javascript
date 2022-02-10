//definimos algunas variables tipo string
let space=' '
let nombre='Daniel'
let edad='21'

//se pueden concatenar varias cadenas strings
let completo=nombre+space+edad
console.log(completo)

//se pueden separar con varios caracteres
// con barra invertida '\' se pueden crear lineas aparte en un mismo parrafo

/*
\n: new line
\t: Tab, means 8 spaces
\\: Barra invertida
\': Single quote (')
\": Double quote (")
*/

console.log('Hola, buenos dias. \n Qué tal estas?')
console.log('Hola \t  Juan \t')
console.log('Hola \t  Juan 2 \t')
console.log('Hola \t  Juan 3 \t')

console.log('Empleamos la doble barra invertida \ (\\)')
console.log('El refran \'Mejor solo que mal acompañado\' es perfecto.' )

/*template strings

`String literal text`
`string literal text ${expresion}`
*/

console.log(`2 y 3 son 5`)
let a=2,b=3

console.log(`${a} y ${b} son 5`)

//las template string pueden usarse ademas para hacer algunas operaciones
//como comparaciones, operaciones aritmeticas o ternarias

let z=2,y=3
console.log(`${z} is greater than ${y}: ${a > b}`)
console.log(`${z} y ${y} son ${z+y}`)

//Métodos de String

let cadena='JavaScript'
let longitudCadena=cadena.length
//length muestra la longitud de la cadena (de 1 a X)


//1. Indice de string
let primeraLetra=cadena[0]
let segundaLetra=cadena[1]
//...

let ultimaLetra=cadena.length -1

console.log(cadena[ultimaLetra])

//2. cambio a mayus y a minus
let mayus= cadena.toUpperCase()
let minus=cadena.toLowerCase()
console.log(mayus,'y',minus)

//3. Substr toma dos argumentos, el indice en donde empieza y el numero de caracteres a cortar
console.log(cadena.substr(2,4))
//4. crea una subcadena empezando en el indice del primer argumento y con longitud el segundo argumento
console.log(cadena.substring(2,4))

//5. split divide una cadena por un determinado caracter
let cadena2='30 dias de JavaScript'
console.log(cadena2.split())
console.log(cadena2.split('')) //divide la cadena en 1 string por letra
console.log(cadena2.split(' '))
console.log(cadena2.split('a'))

//6. trim() elimina los espacios del inicio y final de una cadena
let nombre2='    DAN   IEL    '
let nombreMejorado=nombre2.trim()

let nombreMejorado2=nombre2.trim(' ')
console.log(nombreMejorado,nombreMejorado2)

console.log('DAN   IEL')
//7. INCLUDES() indica si una subcadena se encuentra dentro de la cadena a comprobar
//se busca la MISMA subcadena
let compr='Daniel Lopez Gonzalez'
let contiene=compr.includes(' ')
console.log(contiene)

//8. replace() cambia la antigua cadena por la nueva
let string1='Hola buenas tardes'
console.log(string1.replace('tardes','noches'))

//9. charAt indica que caracter se encuentra en determinada posicion
let string2 = '30 Days Of JavaScript'
console.log(string2.charAt(0)) //En la posicion 0 esta el '3' y es lo que saldrá por pantalla

//10. charCodeAt() devuelve el codigo ASCII del caracter que se encuentra en determinada posicion o indice
let string = '30 Days Of JavaScript'
console.log(string.charCodeAt(3))        // D ASCII number is 68

//11. indexOf() es la contraria que charAt: devuelve el indice de determinado caracter o subcadena
//si no encuentra dicho caracter, devolverá -1
// devuelve la posicion del PRIMER caracter que encuentra y detiene la busqueda

let ind = '30 Days Of JavaScript'

console.log(ind.indexOf('D'))          // 3
console.log(ind.indexOf('Days'))       // 3 en caso de subcadena devuelve la primera posicion de esa subcadena
console.log(ind.indexOf('days'))       // -1
console.log(ind.indexOf('a'))          // 4
console.log(ind.indexOf('JavaScript')) // 11

//12. lastIndexOf() lo mismo que indexOf pero devuelve la ultima posicion encontrada
let lastInd = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(lastInd.lastIndexOf('love'))       // posicion 67
console.log(lastInd.lastIndexOf('you'))        // posicion 63

//13. concat() concatena varias strings
let n='Daniel'
let ap1='Lopez'
let ap2='Gonzalez'
let todo=n.concat(ap1,ap2)
console.log(todo)

//14. startsWith() comprueba si la cadena empieza con la subcadena pasada como argumento
let cad='Daniel Lopez'
console.log(cad.startsWith('Daniel'))//true
console.log(cad.startsWith('daniel'))//false
console.log(cad.startsWith('D'))//true
console.log(cad.startsWith('Lopez'))//false

//15. endsWith() lo mismo que startsWith pero se comprueba el final
let country = 'Finland'

console.log(country.endsWith('land'))         // true
console.log(country.endsWith('Fin'))          // false

//16 search(substring) busca en la cadena la subcadena y devuelve el indice de
//la primera coincidencia
//permite la busqueda con patrone con '/'
let string5 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string5.search('love'))          // 2
console.log(string5.search(/javascript/gi))  // 7
//g significa buscar en todo el texto- global; i no tiene en cuenta mayus o minus

//17 match() devuelve un array si existe coincidencia con el patron
//o subcadena pasada por argumento, si no devuelve null
let mat = 'love is love.'
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi 
console.log(mat.match('love'))
//al imprimir por pantalla muestra lo siguiente
// ["love", index: 2, input: "love is love.", groups: undefined]

//ejemplo extrayendo los numeros de la cadena con un patron

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let patron1 = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(patron1))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]

//18. repeat() repite las veces q se pasen como argumento de la cadena 
//a la que se refiere

let rep = 'love'
console.log(rep.repeat(10)) 
