// Para executá-lo esteja no diretório onde está o arquivo e execute o comando 'node nomeDoArquivo.exemplo'

const { EventEmitter } = require('events')

const ev = new EventEmitter()

ev.on('saySomething', (a) => {
    console.log(`${a} listened`)
})

ev.once('saySomething', (a) => {
    console.log(`${a} listened`)
})

ev.emit('saySomething', 'first message')
ev.emit('saySomething', 'second message')