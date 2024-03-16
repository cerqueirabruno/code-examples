/*

========== ELEMENTOS AVALIADOS COMO "FALSE" ==========

false
0
'', "", ``
null
undefined
NaN

*/

// &&
// retorna o valor false;
// se todos for true, retorna o último elemento;
console.log('teste' && true && 'hello'); // hello
console.log('teste' && false && 'hello'); // false

// ||
// retorna primeira expressão verdadeira
// se todos for false, retorna o último elemento;
console.log('teste' || true || 'hello'); // teste
console.log('', false, 0); // 