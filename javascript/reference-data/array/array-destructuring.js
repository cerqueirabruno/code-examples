/*

ARRAY DESTRUCTURING (DESESTRUTURAÇÃO DE ARRAY)

permite extrair valores de arrays e atribuí-los a variáveis individuais de forma mais concisa.

*/


// exemplo 1:
const meuArray = [1, 2, 3, 4, 5];

const [primeiro, segundo, terceiro] = meuArray;

console.log(primeiro); // saída: 1
console.log(segundo); // saída: 2
console.log(terceiro); // saída: 3


// exemplo 2:
const arrayDeNumeros = [10, 20];

function extrairValores([valor1, valor2]) {
  console.log(valor1);
  console.log(valor2);
}

extrairValores(arrayDeNumeros); // saída: 10 20


// exemplo 3: default destructuring
const heroes = ['shrek', 'princess fiona'];

const [hero1, hero2, hero3 = 'puss in boots'] = heroes;

console.log(hero1); // shrek
console.log(hero2); // princess fiona
console.log(hero3); // puss in boots