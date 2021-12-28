// Para executá-lo esteja no diretório onde está o arquivo e execute o comando 'node nomeDoArquivo.exemplo'

const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Eu sou o ${chapolin.name} colorado!`))

console.log('Oh! Quem poderá nos defender?')
chapolin.emit('help')