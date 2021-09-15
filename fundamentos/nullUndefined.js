let valor // não inicializada (undefined)
console.log(valor)

valor = null // ausência de valor (não aponta para nenhum local de memória)
console.log(valor)
//console.log(valor.toString())//Erro (Cannot read property 'toString' of null)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir undefined mas sim null ou 0 a valores numéricos
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)