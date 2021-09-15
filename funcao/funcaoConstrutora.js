function Carro (velocidadeMaxima = 200, delta = 5) {
    // Atributo privado
    let velocidadeAtual = 0
    // método publico
    this.acelerar = () => {
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    // método publico
    this.getVelocidadeatual = () => {
        return velocidadeAtual
    }
}

const uno = new Carro()
uno.acelerar()
console.log(uno.getVelocidadeatual())

const ferrari = new Carro (350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeatual())

console.log(typeof Carro)
console.log(typeof ferrari)