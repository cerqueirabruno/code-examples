// permite extrair valores de arrays e atribuí-los a variáveis individuais de forma mais concisa.

// ============================== exemplo 1

const meuArray1 = [1, 2, 3, 4, 5];

const [primeiro, segundo, terceiro] = meuArray1; // array destructuring

console.log(primeiro); // saída: 1
console.log(segundo); // saída: 2
console.log(terceiro); // saída: 3

// ============================== exemplo 2

const meuArray2 = [10, 20];

function extrairValores([valor1, valor2]) {
  console.log(valor1);
  console.log(valor2);
}

extrairValores(meuArray2); // saída: 10 20