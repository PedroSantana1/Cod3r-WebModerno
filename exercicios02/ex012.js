function removerPropriedade(object, prop) {
    const copia = Object.assign({}, object)
    delete copia[prop]
    return copia
}

console.log(removerPropriedade({a: 1, b: 2}, "a"))

console.log(removerPropriedade({
id: 20,
nome: "caneta",
descricao: "Não preenchido"
}, "descricao"))