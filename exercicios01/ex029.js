function observarIntervalo (array) {
    let contInInterval = 0
    let contOutInterval = 0
    for(let i = 0; i < array.length; i++) {
        if(array[i] >= 10 && array[i] <= 20) {
            contInInterval ++
        }
        else{
            contOutInterval ++
        }
    }
    return `InInterval: ${contInInterval}, OutInterval: ${contOutInterval}`
}

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

console.log(observarIntervalo(vetor))