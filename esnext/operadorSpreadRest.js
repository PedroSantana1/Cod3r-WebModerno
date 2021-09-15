// Operador ...rest(juntar)/spread(espalhar)

// Usar spread com objeto
const funcionario = {
    nome: 'Maria',
    salario: 12348.99
}

const clone = {
    ativo: true,
    ... funcionario
}

console.log(clone)

// Usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)