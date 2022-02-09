function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao //somente iniciada a variável, sem valor inicial!

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log('Opcao escolhida: ', opcao)
} while(opcao != -1)

console.log('Fim')