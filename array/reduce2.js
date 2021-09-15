const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsisita?

const allBolsisita = alunos.map(a => a.bolsista).reduce((acumulador = true, atual) => {
    if(!atual) acumulador = false
    return acumulador
})
console.log(allBolsisita)

// ou
const todosBolsista = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsista))

// Desafio 2: Algum aluno é bolsista?

const anyBolsisita = alunos.map(a => a.bolsista).reduce((acumulador = false, atual) => {
    if(atual) acumulador = true
    return acumulador
})
console.log(anyBolsisita)

// ou
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))