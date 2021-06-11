function numeroPorExtenso(numero) {
    switch (numero) {
        case 0:
            return `o ${numero} por extenso é "Zero"`        
            break;
        case 1:
            return `o ${numero} por extenso é "Um"`        
            break;
        case 2:
            return `o ${numero} por extenso é "Dois"`        
            break;
        case 3:
            return `o ${numero} por extenso é "Três"`        
            break;
        case 4:
            return `o ${numero} por extenso é "Quatro"`        
            break;
        case 5:
            return `o ${numero} por extenso é "Cinco"`        
            break;
        case 6:
            return `o ${numero} por extenso é "Seis"`        
            break;
        case 7:
            return `o ${numero} por extenso é "Sete"`        
            break;
        case 8:
            return `o ${numero} por extenso é "Oito"`        
            break;
        case 9:
            return `o ${numero} por extenso é "Nove"`        
            break;
        case 10:
            return `o ${numero} por extenso é "Dez"`        
            break;
        default:
            return `o ${numero} esta fora do intervalo 0 e 10`
    }
}

console.log(numeroPorExtenso(0))
console.log(numeroPorExtenso(1))
console.log(numeroPorExtenso(2))
console.log(numeroPorExtenso(3))
console.log(numeroPorExtenso(4))
console.log(numeroPorExtenso(5))
console.log(numeroPorExtenso(6))
console.log(numeroPorExtenso(7))
console.log(numeroPorExtenso(8))
console.log(numeroPorExtenso(9))
console.log(numeroPorExtenso(10))
console.log(numeroPorExtenso(1354))