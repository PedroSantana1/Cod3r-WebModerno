function menorNumero(array) {
    let numero = array[0]
    for(let i = 1; i < array.length; i++) {
        if(array[i] < numero){
            numero = array[i]
        }
    } 
    return numero
}

console.log(menorNumero([10, 5, 35, 65])) // retornará 5
console.log(menorNumero([5, -15, 50, 3])) // retornará -15