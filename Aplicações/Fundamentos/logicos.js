function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const compratTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 //operador unario
    const manterSaudavel = !comprarSorvete

    return{comprarSorvete,compratTv50,comprarTv32,manterSaudavel}//Quando omiti o par chave valor ele cria o objeto com o nome sendo o mesmo valor
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))