// combinar dois ou mais arrays em um novo array, sem modificar os arrays originais.

const a1 = [1, 2, 3, 4, 5];
const a2 = [10, 25, 30, 45];

const a3 = a1.concat(a2, [11, 22, 33, 44], 'bruno');

console.log(a3);