/* El objeto 'Date' es muy util para trabajar con fechas
Tiene varios metodos, entre ellos getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes,
 getSeconds(), getMilliseconds(), getTime(), getDay()
*/

const now= new Date()

console.log(now)
let year=now.getFullYear()
console.log(year)

let timeFromEPOCH = now.getTime()
console.log(timeFromEPOCH,' seconds from EPOCH')

//las dos siguientes fechas son iguales
console.log(Date.now())
console.log(new Date().getTime())


year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) 
