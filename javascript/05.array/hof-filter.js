// FILTER = FILTRO
// cria um novo array com todos os "elementos" que passaram no teste implementado pela função fornecida.

// ex.: 1
const myArray = [1, 2, 3, 4, 5];

const bigNumber = myArray.filter((elemento, indice, arrayCompleto) => {
  return elemento >= 3;
});


// ex.: 2
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

// pessoas com mais de 50 anos de idade;
const pessoasComMais50 = pessoas.filter((elemento, indice, arrayCompleto) => {
  return elemento.idade > 50;
});

// nomes que termina com 'a';
const terminaComA = pessoas.filter((elemento, indice, arrayCompleto) => {
  return elemento.nome.toLowerCase().endsWith('a');
});