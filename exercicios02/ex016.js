function checarAnoBissexto (ano) {
    if(ano % 4 == 0){
        if(ano % 100 == 0) {
            return false
        } else if (ano % 100 == 0 && ano % 400 == 0) {
            return true
        } else {
            return true
        }
    } else {
        return false
    }
}

console.log(checarAnoBissexto(2020)) // retornará true
console.log(checarAnoBissexto(2100)) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400