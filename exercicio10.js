function veirificacao (numero) {
    if (numero % 3 === 0) {
        return true
    } else {
        return false
    } 
}

console.log(veirificacao(9))
console.log(veirificacao(10))
console.log(veirificacao(11.6))