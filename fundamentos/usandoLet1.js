var numero = 1
{
    let numero = 2 // Let tem escopo de variaveis no bloco, o var é sempre global se estiver fora de uma função
    console.log('dentro =', numero)
}
console.log('fora =', numero)