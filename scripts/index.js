// Neste exemplo foi criado um timer no Node
// Para executá-lo esteja no diretório onde está o arquivo e execute o comando 'node nomeDoArquivo.exemplo'

const timeOut1 = 3000
const finished1 = () => {
    console.log('first done')
    clearTimeout(secondTimer)
}
const timeOut2 = 6000
const finished2 = () => console.log('second done')

let firstTimer = setTimeout(finished1, timeOut1)
let secondTimer = setTimeout(finished2, timeOut2)
