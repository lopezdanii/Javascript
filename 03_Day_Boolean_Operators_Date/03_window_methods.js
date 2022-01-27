//1 - metodo alert()
//alert(mensaje)
//no usar mucho, solo para hacer pruebas
alert('Welcome to the 30DaysOfJavaScript')

//2- metodo prompt()
//despliega un cuadro de dialogo que toma la entrada de usuario, el segundo argumento es opcional

let num=prompt('Enter number', 'number goes here')
console.log(num)

//3- metodo confirm()
//Despliega cuadro de dialogo con mensaje especifico con boton de OK y de Cancelar
//Ok sera true y Cancelar sera false

const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box
