// declaramos variables con var,let y const
//alcance de las variables. Cuando usar var y cuando let

//los tipos de variables pueden ser :
// - ventana
// - global
// - local


//si no se declara con var, let o const es de tipo window


//Una variable declarada con var solo tiene alcance de funcion.
//Una variable declarada con let o const tiene alcance de bloque(bloque if, funcion, loop ...)
//ver archivos Global_Scope, Local_Scope y Window_Scope
function letsLearnScope() {
    var gravity = 9.81
    console.log(gravity)
  
  }
  // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
  if (true){
    var gravity = 9.81
    console.log(gravity) // 9.81
  }
  console.log(gravity)  // 9.81
  //_____________________COMPARACION_________________
  if (true){
    let gravity = 9.81
    console.log(gravity) // 9.81
  }
  console.log(gravity)  // no saca nada, let tiene alcance limitada al bloque
  //y no infecta otras partes de nuestro codigo

  for(var i = 0; i < 3; i++){
    console.log(i) // 1, 2, 3
  }
  console.log(i) 

  //Se recomienda usar let y const siempre para escribir codigo limpio
  //y evitar debuging complicado

  //REGLA:

  //Let para cualquier valor variable
  //const para cualquier valor fijo, para arrays, objetos,funciones flecha y funciones expresion


