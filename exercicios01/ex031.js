function negativesValuesInArray (array) {
    let negativeValues = 0
    for (let i = 0; i < array.length; i++) {
        if(array[i] < 0){
            negativeValues++
        }
    }
    return negativeValues
}

vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(negativesValuesInArray(vetor))