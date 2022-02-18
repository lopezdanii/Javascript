//En una funcion si no se pasan los argumentos se usaran los valores por defecto

//syntax
function funcionName(param=value){
    //codigo de la funcion
}
//llamada a la funcion
funcionName()
funcionName(arg)

//Ejemplo: establecemos por defecto el nombre Dani
//Pero al pasarle un argumento utiliza ese valor para mostrar el mensaje
function greetings(name='Dani'){
    let mensaje=`${name}, welcome to 30 Days Of JavaScript`
    return mensaje
}
console.log(greetings())
console.log(greetings('Julio'))


function calculateAge(birthYear, currentYear = 2021) {
    let age = currentYear - birthYear
    return age
  }
  
  console.log('Age: ', calculateAge(1819))
  console.log('Age: ', calculateAge(1819,1870))