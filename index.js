// Exemplo de código para ser rodado em um terminal, executando dentro do Node
// no bash executar o comando "node", logo após "pwd" para garantir que está no diretório correto
// então digite o nome do arquivo JavaScript para o Node executá-lo

function c() {
    setTimeout(() => {console.log('d')}, 1000)
    setTimeout(() => {console.log('c')}, 0)
    return
}

function b() {
    console.log('b')
    return c()
}

function a() {
    b()
    console.log('a')
    return
}

a()