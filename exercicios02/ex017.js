function somarNumeros (array) {
    const soma = array.reduce((acumulador, atual) => acumulador + atual)
    return soma
}

console.log(somarNumeros([10, 10, 10])) // retornará 30
console.log(somarNumeros([15, 15, 15, 15])) // retornará 60