function modelosDeCarros(modelos) {
    switch (modelos) {
        case "Hatch":
            return "Compra efetuada com sucesso."
            break;
        case "Sedans":
        case "Motocicletas":
        case "Caminhonetes":
            return "Tem certeza que não prefere este modelo?"
            break;
        default:
            return "Não trabalhamos com este tipo de automóvel aqui."
    }
}

console.log(modelosDeCarros("Hatch"))
console.log(modelosDeCarros("Sedans"))
console.log(modelosDeCarros("Motocicletas"))
console.log(modelosDeCarros("Caminhonetes"))
console.log(modelosDeCarros("kart"))