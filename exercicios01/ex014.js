function venderFruta(nome) {
    switch (nome) {
        case "maçã":
            return "Não vendemos esta fruta aqui"
        case "kiwi":
            return "Estamos com a escassez de kiwis"
        case "melancia":
            return "Aqui está, são 3 reais o quilo"
        default:
            return "Erro"
    }
}

console.log(venderFruta('maçã'))
console.log(venderFruta('kiwi'))
console.log(venderFruta('melancia'))
console.log(venderFruta('alcatra'))