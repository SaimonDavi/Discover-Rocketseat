// Neste exemplo foi criado um timer no Node
// Para executá-lo esteja no diretório onde está o arquivo e execute o comando 'node nomeDoArquivo.exemplo'

const timeOut = 3000
const finished = () => console.log('done!')

setTimeout(finished, timeOut)
console.log('wait...')