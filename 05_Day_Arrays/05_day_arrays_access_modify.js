const nombres=['Daniel','Juan','Angel','David','Carlos']
let primerNombre=nombres[0]
let ultimoNombre=nombres[nombres.length-1]
console.log('El primer nombre es ',primerNombre)
console.log('El ultimo nombre es ',ultimoNombre)
//se muestran todos los elementos del array
console.log('Los nombres de las personas registradas son ',nombres)

//Modificar un array
//cambiamos el nombre 'Angel' por el nombre 'Pepe'
nombres[2]='Pepe'
console.log('Los nombres de las personas registradas son ',nombres)
