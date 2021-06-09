function diaDaSemana(dia) {
    if (dia >= 1 && dia <= 32){
        switch (dia) {
            case 1:
            case 7:
            case 8: 
            case 14: 
            case 15:
            case 21:
            case 22:
            case 28:
            case 29:
                return "Hoje é um final de Semana!"
                break;
            default:
                return "Hoje é um dia útil!"
        }
    } else {
        return "Dia inválido dado o número referente ao dia"
    }
    
}


console.log(diaDaSemana(1))
console.log(diaDaSemana(5))
console.log(diaDaSemana(55))
console.log(diaDaSemana(-5))