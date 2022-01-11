//Funcao sem retorno

function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(4)//Retorna um NaN
imprimirSoma(2,5,6,4,8)//Ele ignora o resto
imprimirSoma()//Retorna um NaN

//Funcao com retorno

function soma(a,b = 0){
    return a + b
}

console.log(soma(5,5))
console.log(soma(5))
console.log(soma()) //NaN