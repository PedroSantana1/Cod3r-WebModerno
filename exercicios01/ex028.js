function paresImpares(vetor){
    let vetorResult = []
    let contPairs = 0
    let contImpairs = 0
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] % 2 == 0){
            contPairs ++
        }
        else{
            contImpairs ++
        }
    }
    vetorResult.push(contPairs)
    vetorResult.push(contImpairs)
    return vetorResult
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log(paresImpares(vetor))