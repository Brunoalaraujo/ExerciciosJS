function frutasDisponiveis(fruta) {
    switch (fruta) {
        case "Maçã":
            return "Não temos essa fruta aqui"
            break;
        case "Kiwi":
            return "Estamos com escassez de kiwis"
            break;
        case "Melancia":
            return "Aqui está, são 3 reais o quilo"
            break;
        default:
            return "Erro no console"
    }
}

console.log(frutasDisponiveis("Maçã"))
console.log(frutasDisponiveis("Kiwi"))
console.log(frutasDisponiveis("Melancia"))
console.log(frutasDisponiveis("Banana"))