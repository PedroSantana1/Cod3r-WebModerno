function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50pol = trabalho1 && trabalho2
    const comprarTv32pol = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete
    return{ 
        comprarSorvete, 
        comprarTv50pol, 
        comprarTv32pol, 
        manterSaudavel 
    }
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,false))