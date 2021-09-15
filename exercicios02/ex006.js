function inverso (param) {
    const tipo = typeof param
    if(tipo == "boolean") return !param
    else if(tipo == "number") return -param
    else return `Parametro inválido do tipo ${tipo}`
}

console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(-2000))
console.log(inverso("programação"))