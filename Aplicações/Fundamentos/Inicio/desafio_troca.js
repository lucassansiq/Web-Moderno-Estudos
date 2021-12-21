//Trocar o valor de duas variaveis e mostrar no console
 
let a = 7;
let b = 94;
let aux;
console.log("A: " + a + "\n" + "B: " + b);

aux = a;
a = b;
b = aux;

//[a,b] = [b,a];

console.log("A: " + a + "\n" + "B: " + b);