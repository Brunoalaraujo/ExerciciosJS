function bhaskara(a, b, c) {
    let conjuntoSolucao = []
    let delta = (b ** 2) - (4 * a * c)
    if (delta < 0) {
        return "Delta Negativo"
    } 
    let x1 = (- b + Math.sqrt(delta)) / (2 * a)
    let x2 = (- b - Math.sqrt(delta)) / (2 * a)
    conjuntoSolucao.push(x1)
    conjuntoSolucao.push(x2)
    return conjuntoSolucao
}


console.log(bhaskara(3,-5, 12))
console.log(bhaskara(1, -10, 25))