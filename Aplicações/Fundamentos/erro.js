function tratarErroELancar(erro){
    //throw new Error('...')
    throw{
        nome: 'Erro tal',
        msg: 'Ja iremos resolver',
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch(e){
        tratarErroELancar(e)
    }finally{
        console.log('Final')
    }
}

const obj = {nome: 'Roberto'}

imprimirNomeGritado(obj)