function receberPrimeiroEUltimoElemento (array) {
    let result = []
    result.push(array[0])
    result.push(array[array.length-1])
    return result
}

console.log(receberPrimeiroEUltimoElemento([7, 14, "olá"]))
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]))