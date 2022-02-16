//edades de 10 estudiantes
const ages=[19,22,19,24,20,25,26,24,25,24]

//buscar la edad minima y la maxima
const minAge=ages.sort()[0]
const maxAge= ages.sort()[ages.length-1]

console.log(`La edad mínima es ${minAge} y la maxima es ${maxAge}`)
console.log(ages)
// buscar la media de edad entre todos
let i=0
let total=0
while(i<ages.length){
    total= total + ages[i]
    i++
}
let mediaEdad= total/ages.length
console.log(`La media de las edades es ${mediaEdad}`)

// buscar la mediana de la edad: valor medio en el array ordenado si longitud impar o 2 valores medios/2 si longitud par
let medianAge=0
if(ages.length%2==0){
    let indiceMedio=parseInt((ages.length-1)/2)
    let indiceMedio2=indiceMedio+1
    medianAge=(ages[indiceMedio]+ages[indiceMedio2])/2
    console.log(`La mediana de las edades es ${medianAge}`)
}else{
    medianAge=ages[parseInt(ages.length/2)]
    console.log(`La mediana de las edades es ${medianAge}`)


}
    //buscar el rango(max - min)
const rango= maxAge - minAge
console.log(`El rango es ${rango}`)

//comparar los valores(minAge - mediaEdad) y (maxAge - mediaEdad) con absoluto
const min_minus_media=Math.abs(minAge - mediaEdad)
const max_minus_media=Math.abs(maxAge - mediaEdad)
console.log(`(maxAge-mediaEdad) es ${max_minus_media} y (minAge - mediaEdad) es ${min_minus_media}`)
