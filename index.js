//Exemplo de código para ser rodado em um terminal, executando dentro do node

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