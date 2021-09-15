function criarPessoa (nome){
    this.nome = nome
    
    this.falar = () => {
        console.log (`Meu nome é ${this.nome}`)
    }
}

const p1 = new criarPessoa('Pedro')
p1.falar()