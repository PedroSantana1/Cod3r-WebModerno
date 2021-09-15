let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]

function conceptOfGrades(array) {
    let conceptArrays = []
    for (var i = 0; i < array.length; i++) {
        if(array[i] >= 0.0 && array[i] <= 4.9){
            conceptArrays.push("D")
        } else if(array[i] >= 5.0 && array[i] <= 6.9) {
            conceptArrays.push("C")
        } else if(array[i] >= 7.0 && array[i] <= 8.9) {
            conceptArrays.push("B")
        } else if(array[i] >= 9.0 && array[i] <= 10.0) {
            conceptArrays.push("A")
        } else {
            conceptArrays.push("Invalid")
        }
    }
    return conceptArrays
}

console.log(conceptOfGrades(notas))