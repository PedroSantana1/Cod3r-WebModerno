function tratarErroELancar(erro){
    //throw new Error('Erro')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprmirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { name: 'Roberto' }
imprmirNomeGritado(obj)