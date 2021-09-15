function funcaoDaSorte(num) {
    const luckyNum = Math.floor(Math.random() * (10 - 0 + 1) + 0)
    const resultado = luckyNum == num ? ` "Parabéns! O número sorteado foi o ${luckyNum}`:`Que pena! O número sorteado foi o ${luckyNum}`
    return resultado
}

console.log(funcaoDaSorte(10)) // retornará "Parabéns! O número sorteado foi o 10"
console.log(funcaoDaSorte(5)) // retornará "Que pena! O número sorteado foi o 3"
console.log(funcaoDaSorte(5)) // retornará "Que pena! O número sorteado foi o 1"