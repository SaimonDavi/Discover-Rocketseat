// Neste exemplo foi criado um timer no Node
// Para executá-lo esteja no diretório onde está o arquivo e execute o comando 'node nomeDoArquivo.exemplo'

const timeOut = 500
const checking = () => console.log('checking!')

let interval = setInterval(checking, timeOut)

setTimeout(() => clearInterval(interval), 3000)