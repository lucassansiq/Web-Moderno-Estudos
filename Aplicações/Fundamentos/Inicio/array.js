const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) //Quantidade de indices no array

valores.push({id: 3}, false,null,'teste') //Incluindo valor
console.log(valores)

console.log(valores.pop()) //Retira o ultimo valor
console.log(valores)

delete valores[0] //Retira pelo indice
console.log(valores)

console.log(typeof valores) //mostra qual tipo do array

