let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) // antes da variavel (++num1) faz o incremento antes da comparação, se for depois da varivavel (num2--) faz o incremento depois da comparação
console.log(num1 === num2)

// Operador de exponenciação

let exp = 2 ** 3 // O primeiro valor representa a base e o segundo representa o expoente
console.log(exp)

let base = 2
base **= 3
console.log(base)