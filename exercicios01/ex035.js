let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function addArray(initialArray, additionalArray) {
    for (let i = 0; i < additionalArray.length; i++) {
        initialArray.push(additionalArray[i])
    }
    console.log('Added array: ' + additionalArray)
    console.log('Resulr array: ' + initialArray)
}

addArray(vetorPilha, vetorAdiciona)