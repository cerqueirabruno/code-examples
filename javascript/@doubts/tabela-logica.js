/*

TABELA LÓGICA

^ : AND : E : && : CONJUNÇÃO // 2 condições verdadeiras para ser verdadeira
v : OR : OU : || : DISJUNÇÃO // 1 condição verdadeira para ser verdadeira
~ : NOT : NÃO : ! : NEGAÇÃO // inverte o valor

*/


const V = true;
const F = false;

// && CONJUNÇÃO (todos os valores verdadeiros)
console.log(V && V); // true ***
console.log(V && F); // false
console.log(F && V); // false
console.log(F && F); // false

// || DISJUNÇÃO (todos os valores falsos)
console.log(V || V); // true
console.log(V || F); // true
console.log(F || V); // true
console.log(F || F); // false ***

// ! NEGAÇÃO
console.log(!V); // false
console.log(!F); // true ***

// !== DISJUNÇÃO EXCLUSIVA (valores diferentes)
console.log(V !== F); // true ***
console.log(V !== V); // false
console.log(F !== F); // false
console.log(F !== V); // true ***
