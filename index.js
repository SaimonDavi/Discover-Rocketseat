let controleDeGastos = {
    receitas: [ 2500, 3200, 250.43, 360.45],
    despesas: [ 320.34, 128.45, 176.87, 1450.00]
}

function somaArray(array) {
    let somaArray = 0

    for(let i of array) {
        somaArray += i
    }

    return somaArray;
}

function calculoDispesas() {
    let saldoPositivo = somaArray(controleDeGastos.receitas);
    let saldoNegativo = somaArray(controleDeGastos.despesas);

    return saldoPositivo - saldoNegativo;
}

console.log(calculoDispesas() + 'R$')