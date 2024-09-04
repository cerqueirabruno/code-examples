// sort = organizar.
// ordenar os elementos de um array de acordo com um critério de ordenação.
// realiza a ordenação modificando o próprio array.
// por padrão, classifica os elementos em ordem alfabética para strings e em ordem crescente para números.

// ==================== sintaxe
array.sort(`função de comparação`(opcional));

// ==================== exemplo 1: classificar strings
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // output: [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// ==================== exemplo 2: classificar números ou números e strings
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b }); // output: [ 1, 5, 10, 25, 40, 100 ]

// ==================== exemplo 3: sort em arrays de objetos
const products = [
  { name: 'Notebook', price: 2500 },
  { name: 'Celular', price: 1500 },
  { name: 'TV', price: 3000 },
  { name: 'Fones de ouvido', price: 100 },
];

products.sort((a, b) => a.price - b.price);

console.log(products);
// [
//   { name: 'Fones de ouvido', price: 100 },
//   { name: 'Celular', price: 1500 },
//   { name: 'Notebook', price: 2500 },
//   { name: 'TV', price: 3000 }
// ]