//Funcion para calcular el IMC(Indice de Masa Corporal)
//de una persona

function IMC(altura,peso){
    let imc= peso / (altura*altura)
    console.log(`Tu IMC es ${imc}. `)
    let estado
    switch (true){
        case (imc<18.5):
            estado= 'Delgado'
            break
        case (18.5 <= imc <= 24.9):
            estado='Normal'
            break
        case (25 <= imc <= 29.9):
            estado='Sobrepeso'
            break
        case (30<=imc):
            estado='Obesidad' 
            break
        default:
            estado='Fallo en el calculo del IMC'
    }
    return estado
}

let altura=prompt('Calculo del IMC','Introduce tu altura(m):')
let peso=prompt('Calculo del IMC', 'Introduce tu peso(kgs):')
console.log(`Tu estado es: `,IMC(altura,peso))