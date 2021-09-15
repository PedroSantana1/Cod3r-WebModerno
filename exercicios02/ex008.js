function multiplicar(num1, num2) {
    let multiplicacao = 0
    for(let i = 0; i < num2; i++) {
        multiplicacao += num1
    }
    return multiplicacao
}

console.log(multiplicar(5,5))
console.log(multiplicar(0,7))