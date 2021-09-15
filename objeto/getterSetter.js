const sequence = {
    _valor: 1, // conveção
    get valor() { return this._valor++ },
    set valor(valor) { 
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequence.valor, sequence.valor)
sequence.valor = 1000
console.log(sequence.valor, sequence.valor)
sequence.valor = 900
console.log(sequence.valor, sequence.valor)