function contarPalavras(string) {
    const palavras = string.split(' ')
    return palavras.length
}

console.log(contarPalavras("Sou uma frase")) // retornarĂ¡ 3
console.log(contarPalavras("Me divirto aprendendo a programar")) // retornarĂ¡ 5