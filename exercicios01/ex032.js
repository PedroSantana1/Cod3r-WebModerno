function averageOfArray (array) {
    let soma = 0
    let media = 0
    for(let i = 0; i < array.length; i++) {
        soma += array[i]
    }
    media = soma / array.length
    return media
}

vetor = [1, 2, 3, 4, 5]
console.log(averageOfArray(vetor))