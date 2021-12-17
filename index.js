let nota = 40

function getNota(notaNum) {
    let notaLet = ''

    let notaA = notaNum >= 90 && notaNum <= 100
    let notaB = notaNum >= 80 && notaNum <= 89
    let notaC = notaNum >= 70 && notaNum <= 79
    let notaD = notaNum >= 60 && notaNum <= 69
    let notaF = notaNum < 60 && notaNum >=0
    
    if(notaA) {
        notaLet = 'A'
    } else if(notaB) {
        notaLet = 'B'
    } else if(notaC) {
        notaLet = 'C'
    } else if(notaD) {
        notaLet = 'D'
    } else if(notaF) {
        notaLet = 'F'
    } else {
        notaLet = 'Nota inválida'
    }

    return notaLet;
}

console.log(getNota(nota))