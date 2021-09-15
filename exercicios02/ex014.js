function objetoParaArray(obj) {
    const resultado = []
    for (let chave in obj)
        resultado.push([ chave , obj[chave] ])

    return resultado
}

console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}))

console.log(objetoParaArray({
    codigo: 11111,
    preco: 12000
}))