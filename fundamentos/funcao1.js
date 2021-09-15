// Função sem retorno
function imprimirSoma(a, b){
    if(Number.isInteger(a) && Number.isInteger(b)){
        console.log(a + b)
    }
    else{
        console.log("Números inválidos")
    }
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)
imprimirSoma()
imprimirSoma(10.5,10.5)

// Função com retorno
function soma (a, b = 1){
    return a + b;
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())