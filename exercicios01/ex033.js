let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

function Concat (...args) {
    resultado = []
    for (let i = 0; i <arguments.length; i++) {
        resultado = resultado.concat(arguments[i])
    }
    return resultado
}

console.log(Concat(vetorInteiro, vetorDouble))
console.log(Concat(vetorDouble, vetorString))
console.log(Concat(vetorInteiro, vetorDouble, vetorString))