function somarNumeros (array) {
    const soma = array.reduce((acumulador, atual) => acumulador + atual)
    return soma
}

console.log(somarNumeros([10, 10, 10])) // retornarĂ¡ 30
console.log(somarNumeros([15, 15, 15, 15])) // retornarĂ¡ 60