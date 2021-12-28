// Para executá-lo esteja no diretório onde está o arquivo e execute o comando 'node nomeDoArquivo.exemplo'

const events = require('events')
const { EventEmitter } = require('events')

console.log(events)
console.log(EventEmitter)

const ev = new EventEmitter()

console.log(ev)