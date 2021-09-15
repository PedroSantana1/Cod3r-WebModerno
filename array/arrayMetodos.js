const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um elemento na ultima posição do array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um elemento do array na primeira posição
console.log(pilotos)

// Splice pode adicionar e remover elementos

// Adicionar
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

// Remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPiloto1 = pilotos.slice(2) // Novo array pegando o array pilotos apartir do index 2
console.log(algunsPiloto1)

const algunsPiloto2 = pilotos.slice(1, 4) // Inicia em 1 e acaba em 4, não incluindo o 4
console.log(algunsPiloto2)