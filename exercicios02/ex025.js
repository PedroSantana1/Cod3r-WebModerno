function buscarPalavrasSemelhantes(search, array) {
    return array.filter(array => array.includes(search))
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])) // retornará ["programação", "profissional"]
console.log(buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"])) // retornará ["javascript", "java"]