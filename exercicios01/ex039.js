let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

function tradeAllElementsOfArray(firstArray,secondArray) {
    if(firstArray.length == secondArray.length) {
        for (let i = 0; i < firstArray.length; i++){
            firstArray[i] = firstArray[i] + secondArray[i]
            secondArray[i] = firstArray[i] - secondArray[i]
            firstArray[i] = firstArray[i] - secondArray[i]
        }
    }
    else{
        return `Different length of arrays`
    }

    console.log('New first array: ' + firstArray)
    console.log('New second array: ' + secondArray)
   
}

tradeAllElementsOfArray(vetorA, vetorB)