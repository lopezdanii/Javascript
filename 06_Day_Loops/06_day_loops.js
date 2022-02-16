//Bucles o loops para realizar tareas repetitivas
//varios tipos de bucles

//BUCLE FOR
for(let i=0;i<=5;i++){
    console.log(i)
}

for(let j=0;j<=5;j++){
    console.log(`${j} * ${j} = ${j*j}`)
}

const countries=['Finlandia','Spain','Francia']
const countriesUpper=[]
for(let i=0;i< countries.length;i++){
    countriesUpper.push(countries[i].toUpperCase())
}
console.log(countriesUpper)
console.log(countries)

//BUCLE WHILE
let i=0
while(i<=5){
    console.log(i)
    i++
}

//BUCLE DO WHILE
let j=0
do{
    console.log(j)
    j++
}while(j<=5)

//BUCLE FOR OF
//Se usa para arrays
const nums=[1,2,3,4,5]
for (const num of nums){
console.log(num)

}//muestra: 1 2 3 4 5

let sum=0
for (const num of nums){
    sum=sum + num
    
}
    console.log(sum)

//  BREAK y CONTINUE
//break interrumpe un bucle
//continue salta a la siguiente interaccion 
for(let i=0;i<=5;i++){
    if(i==1)continue//el 1 no lo imprime salta a la iteraccion 2
    if(i==3){//a partir de la iteracion 3, incluida, se corta el bucle
        break
    }
    console.log(i)
}
