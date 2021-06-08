
function arredondamento (nota) {
    if (nota % 5 > 2 ) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

function classificaAluno(nota) {
    let notaCorrigida = arredondamento(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`)
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`)
    }
}


classificaAluno(15)
classificaAluno(38)
classificaAluno(46)