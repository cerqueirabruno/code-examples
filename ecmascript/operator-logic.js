/* 

&& # AND # E # para ser true, todas precisam ser true;
|| # OR # OU # para ser false, todas precisam ser false;
! # NOT # NÃO # nega a sentença;

*/

console.log(true && true && true); // true
console.log(true && true && false); // false

console.log(false || false || false); // false
console.log(false || false || true); // true

console.log(true); // true
console.log(!true); // false
console.log(!false); // true
console.log(!!true); // true