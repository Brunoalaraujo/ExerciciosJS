function calculadora(a, operacao, b) {
    switch (operacao) {
        case "+":
            return `A soma de ${a} + ${b} é ${a + b}`
            break;
        case "-":
            return `A subtração de ${a} - ${b} é ${a - b}`
            break;
        case "*":
            return `A multiplicação de ${a} * ${b} é ${a * b}`
            break;
        case "/":
            return `A divisão de ${a} / ${b} é ${a / b}`
            break;
        default:
            return `Operação inválida!!`
    }
}

console.log(calculadora(3, "+", 6))
console.log(calculadora(3, "-", 6))
console.log(calculadora(3, "*", 6))
console.log(calculadora(3, "/", 6))
console.log(calculadora(3, "asd", 6))