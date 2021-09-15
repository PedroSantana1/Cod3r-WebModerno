// pessoa -> Espaço de memória -> {...}
// O constante é o espaço de memória e não o objeto em si
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> Novo espaço de memória -> {...}
// Ao tentar mudar o espaço de memória da constante irá dar erro:
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa) // Depois de um objeto ser freeze não é possivel manipula-lo

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)

const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Maria' 
console.log(pessoaConstante)