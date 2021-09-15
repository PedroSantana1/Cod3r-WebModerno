const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OOP

const falarDePessoa = pessoa.falar.bind(pessoa) // (bind) - Método responsavel para informar quem é o this atraves do seu parametro
falarDePessoa()