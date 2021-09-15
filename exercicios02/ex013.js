function filtrarNumeros(array) {
    const result = []
    result.push(array)
    const isNumber =  e => typeof e === "number"
    const finalResult = result.filter(isNumber)
    return finalResult
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))