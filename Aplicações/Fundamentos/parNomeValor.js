// par nome/valor

const saudacao = 'Opa' // contexto lexico 1

function exe(){
    const saudacao = 'Falaaa' // contexto lexico 2
    return saudacao
}

//Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'Rua muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exe())

console.log(cliente)

