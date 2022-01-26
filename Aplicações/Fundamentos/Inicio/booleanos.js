let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo)

console.log(`Os verdadeiros...
${!!3}
${!!-1}
${!!' '}
${!!'texto'}
${!![]}
${!!{}}
${!!Infinity}
${!!(isAtivo = true)}`);

console.log(`Os falsos...
${!!0}
${!!''}
${!!null}
${!!NaN}
${!!undefined}
${!!(isAtivo = false)}`);

console.log(`pra finalizar...
${!! ('' || null || 0 || ' ')}
`);

let nome = '';
console.log(nome || 'Desconhecido');