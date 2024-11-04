// for aninhado
// for encadeado
// hofs aninhadas
// hofs encadeadas


// hofs encadeada
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers
    .filter(n => n % 2 === 0) // filtra números pares // [2, 4, 6, 8, 10]
    .map(n => n * 2) // multiplica cada número por 2 // [4, 8, 12, 16, 20]
    .reduce((sum, n) => sum + n, 0); // soma todos os valores // 60

console.log(result); // 60