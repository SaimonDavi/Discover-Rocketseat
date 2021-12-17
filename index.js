function sayMyName(name) {
    if(name === '') {
        throw 'Erro! Nome é obrigatório'
    }
    console.log(name)
}

try {
    sayMyName('Saimon')
    sayMyName('')
} catch (error) {
    console.log(error)
}

console.log('Depois da função')