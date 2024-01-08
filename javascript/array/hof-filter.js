/*

  - cria um novo array com todos os "elementos" que passaram no teste implementado pela função fornecida.
  - retorna um novo array com os "elementos" que passaram no teste.
  - não altera o array a partir da qual foi invocado.

*/

/* ========== filter 1 ========== */

const myArray = [1, 2, 3, 4, 5];

const big = myArray.filter((elemento, indice, arrayCompleto) => {
  return elemento >= 3;
});

console.log(big);


/* ========== filter 2 ========== */

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
];

// nomes com 5 ou mais caracteres;
const pessoasComNomeGrande = pessoas.filter((elemento, indice, arrayCompleto) => {
  return elemento.nome.length >= 5;
});

console.log(pessoasComNomeGrande);

// pessoas com mais de 50 anos de idade;
const pessoasComMais50 = pessoas.filter((elemento, indice, arrayCompleto) => {
  return elemento.idade > 50;
});

console.log(pessoasComMais50);

// nomes que termina com 'a';
const terminaComA = pessoas.filter((elemento, indice, arrayCompleto) => {
  return elemento.nome.toLowerCase().endsWith('a');
});

console.log(terminaComA);