function getValor (valor) {
    return `${valor.toFixed(2).toString().replace('.', ',')}€`
}

console.log(getValor(0.1 + 0.2))