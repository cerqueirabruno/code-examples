// sort = organizar.
// ordenar os elementos de um array de acordo com um critério de ordenação.
// realiza a ordenação modificando o próprio array.
// Por padrão, classifica os elementos em ordem alfabética para strings e em ordem crescente para números.

// ==================== sintaxe
array.sort(`função de comparação` (opcional));

// ==================== exemplo 1: classificar strings
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // output: [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// ==================== exemplo 2: classificar números ou números e strings
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b }); // output: [ 1, 5, 10, 25, 40, 100 ]