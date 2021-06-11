function compra(codigoDoProduto, quantidade) {
    switch (codigoDoProduto) {
        case 100:
            return `${quantidade} unidade(s) de Cachorro(s) Quente(s), valor total R$ ${ 3.00 * quantidade }`
            break;
        case 200:
            return `${quantidade} unidade(s) de Hambúrguer(s) Simples(s), valor total R$ ${ 4.00 * quantidade }`
            break;
        case 300:
            return `${quantidade} unidade(s) de Cheesburguer(s), valor total R$ ${ 5.50 * quantidade }`
            break;
        case 400:
            return `${quantidade} unidade(s) de Bauru(s), valor total R$ ${ 7.50 * quantidade }`
            break;
        case 500:
            return `${quantidade} unidade(s) de Refrigerante(s), valor total R$ ${ 3.50 * quantidade }`
            break;
        case 600:
            return `${quantidade} unidade(s) de Suco(s), valor total R$ ${ 2.80 * quantidade }`
            break;
        default:
            return `${codigoDoProduto} Código de produto não existente.`
    }
}

console.log(compra(100, 5))
console.log(compra(200, 3))
console.log(compra(300, 7))
console.log(compra(400, 6))
console.log(compra(500, 9))
console.log(compra(600, 2))
console.log(compra(880, 5))