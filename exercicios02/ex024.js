function contarCaractere(caractere, string) {
    let cont = 0
    for (let  i = 0; i < string.length; i++) {
        caractere == string[i] ? cont++ : cont = cont
    }
    return cont
}

console.log(contarCaractere("r", "A sorte favorece os audazes")) // retornarĂ¡ 2
console.log(contarCaractere("c", "Conhece-te a ti mesmo")) // retornarĂ¡ 1