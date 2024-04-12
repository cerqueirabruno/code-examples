/*

> maior que
< menor que

>= maior que ou igual a
<= menor que ou igual a

== igualdade *NÃO USAR*
=== igualdade estrita (valor e tipo)

!= diferente *NÃO USAR*
!== diferente estrito (valor e tipo)

*/

console.log(10 > 5); // true
console.log(10 < 5); // false

const comparacao1 = 10 >= 5;
console.log(comparacao1); // true

const comparacao2 = 10 <= 5;
console.log(comparacao2); // false

const num1 = 10;
const num2 = 10;
const num3 = '10';
const num4 = 5;

console.log(num1 == num2); // true
console.log(num1 === num2); // true

console.log(num1 == num3); // true
console.log(num1 === num3); // false

console.log(num1 != num3); // false
console.log(num1 !== num3); // true