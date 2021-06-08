//Juros Simples

function simples(capitalInicial, taxa, tempo){
    jurosSimples = capitalInicial * (taxa/100) * tempo
    montanteSimples = capitalInicial + jurosSimples
    console.log(montanteSimples)
}

simples(100, 5, 2)

//juros Compostos

function compostos(capitalInicial, taxa, tempo) {
    jurosCompostos = capitalInicial * (1 + (taxa/100))** tempo
    console.log(jurosCompostos)
}

compostos(100, 5, 2)