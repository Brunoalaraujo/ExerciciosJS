let verificacaoDeTriangulos = function (x, y, z) {
    if (x === y && y === z) {
        console.log("Seu triângulo é Equilátero")
    } else if (x === y || y === z || z === x) {
        console.log("Seu triângulo é Isósceles")
    } else if (x != y && y != z && z != x) {
        console.log("Seu triângulo é Escaleno")
    }
}

verificacaoDeTriangulos(3, 3, 3)
verificacaoDeTriangulos(4, 3, 4)
verificacaoDeTriangulos(4, 3, 6)