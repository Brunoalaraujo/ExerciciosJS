//Juros Simples

function simples(capitalInicial, taxa, tempo){
    jurosSimples = capitalInicial * (taxa/100) * tempo
    montante = capitalInicial + jurosSimples
    console.log(montante)
}

simples(100, 5, 2)

//juros Compostos

function compostos(capitalInicial, taxa, tempo) {
    jurosCompostos = capitalInicial * (1 + taxa)** tempo
    montante = capitalInicial + jurosCompostos
    console.log(montante)
}

compostos(100, 5/100, 2)