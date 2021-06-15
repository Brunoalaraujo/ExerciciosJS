function valorDePlano(idade) {
    let valorMensal = 100
    let menorQue10 = 80
    let entre10e30 = 50
    let acimaDe30Ate60 = 95
    let acimaDe60 = 130
    if (idade < 10) {
        return `Por conta de sua idade de ${idade} anos, sua faixa de preço é R$ ${valorMensal + menorQue10},00`
    } if (idade >= 10 && idade <= 30) {
        return `Por conta de sua idade de ${idade} anos, sua faixa de preço é R$ ${valorMensal + entre10e30},00`
    } if (idade > 30 && idade <= 60) {
        return `Por conta de sua idade de ${idade} anos, sua faixa de preço é R$ ${valorMensal + acimaDe30Ate60},00`
    } if (idade > 60) {
        return `Por conta de sua idade de ${idade} anos, sua faixa de preço é R$ ${valorMensal + acimaDe60},00`
    }
}

console.log(valorDePlano(9))
console.log(valorDePlano(15))
console.log(valorDePlano(60))
console.log(valorDePlano(61))