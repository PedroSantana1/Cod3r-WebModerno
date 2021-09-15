function repetir(elemento, numRepetir) {
    let array = []
    for(let i = 0; i < numRepetir; i++) {
        array.push(elemento)
    }
    return array
}

console.log(repetir("codigo", 2))
console.log(repetir(7, 3))