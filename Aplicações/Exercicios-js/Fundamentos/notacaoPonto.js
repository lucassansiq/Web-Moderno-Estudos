console.log(Math.ceil(6.1)) //Metodo para arredondar

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola 2'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira') // Instaciando a function
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()