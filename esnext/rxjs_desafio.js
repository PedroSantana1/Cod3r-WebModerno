const fs = require('fs');
const path = require('path');

function readFile (path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (_, content) => {
            try{
                resolve(content.toString()); 
            }
            catch (err) {
                reject(err);
            } 
        })
    })
}

const caminho = path.join(__dirname, 'adados.txt')

readFile(caminho)
    .then(content => content.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)
    .catch(err => console.log('Unexpected Error Occurrs!'))