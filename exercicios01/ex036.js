let vetor = [1, 2, 3, 4, 5]

function multiplyAllArrayValues(array, multiplier) {
    let multiplyArray = []
    array.forEach(element => {
        multiplyArray.push(element * multiplier)
    });
    return multiplyArray
}

console.log(multiplyAllArrayValues(vetor, 3))