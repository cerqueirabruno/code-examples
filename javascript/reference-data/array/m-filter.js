/*

FILTER (FILTRO):

retorna um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
se nenhum elemento passar no teste, é retornado um array vazio.


*/


// exemplo 1:
const myArray = [1, 2, 3, 4, 5];

const bigNumber = myArray.filter((elemento, indice, arrayCompleto) => {
  return elemento >= 3;
});

console.log(bigNumber); // [3, 4, 5]


// exemplo 2:
const persons = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
];

// nomes com 5 ou mais caracteres;
const pessoasComNomeGrande = persons.filter((elemento, indice, arrayCompleto) => {
  return elemento.nome.length >= 5;
});

// pessoas com mais de 50 anos de idade;
const pessoasComMais50 = persons.filter((elemento, indice, arrayCompleto) => {
  return elemento.idade > 50;
});

// nomes que termina com a letra 'a';
const terminaComA = persons.filter((elemento, indice, arrayCompleto) => {
  return elemento.nome.toLowerCase().endsWith('a');
});