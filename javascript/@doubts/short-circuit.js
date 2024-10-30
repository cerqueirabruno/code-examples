/*

// ELEMENTOS AVALIADOS COMO FALSO (TRUTHY)

- false
- 0
- '', "", ``
- null
- undefined
- NaN

*/

console.log('teste' && true && 'hello'); // hello
console.log('teste' && false && 'hello'); // false

console.log('teste' || true || 'hello'); // teste
console.log('teste' || false || 'hello'); // teste