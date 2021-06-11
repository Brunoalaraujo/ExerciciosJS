function aumentoDeSalario(salario, plano) {
    switch (plano) {
        case "A":
            return `O plano ${plano} aumenta o salário em 10%, o novo salário é ${salario * 1.1}`            
            break;
        case "B":
            return `O plano ${plano} aumenta o salário em 15%, o novo salário é ${salario * 1.15}`            
            break;
        case "C":
            return `O plano ${plano} aumenta o salário em 20%, o novo salário é ${salario * 1.2}`            
            break;
        default:
            return `O plano ${plano} é inválido`
    }
}

console.log(aumentoDeSalario(1000, "A"))
console.log(aumentoDeSalario(1000, "B"))
console.log(aumentoDeSalario(1000, "C"))
console.log(aumentoDeSalario(1000, "F"))