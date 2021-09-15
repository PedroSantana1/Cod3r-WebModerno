function receberSomenteOsParesDeIndicesPares(numeros) {
    let resultado = []
    for (let i = 0; i < numeros.length; i+=2) {
        if(numeros[i] % 2 == 0) {
            resultado.push(numeros[i])
        }
    }
    return resultado
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4])) // retornará []
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])) // retornará [10, 22]