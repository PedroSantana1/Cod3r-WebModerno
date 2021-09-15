console.log(soma(3,4)) // É possivel chamar antes da declaração da função

// function declaration
function soma(x, y){
    return x + y
}

// function expression
const sub = function (x, y){
    return x - y
}

// named function expression
const mult = function mult(x, y){
    return x * y
}

console.log(sub(3, 4)) // Só é possivel chamar depois da declaração da função
console.log(mult(3,4)) // Só é possivel chamar depois da declaração da função