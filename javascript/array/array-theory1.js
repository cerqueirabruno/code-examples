/* 

  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
  https://www.w3schools.com/jsref/jsref_obj_array.asp

*/ 

/*

  array: um array em javascript é uma estrutura de dados que pode armazenar uma coleção de valores, sejam
  eles números, strings, objetos, funções ou outros tipos de dados. os arrays em javascript são indexados
  numericamente, o que significa que cada elemento em um array é acessado por um número chamado de índice.

  vetor: é considerado um caso especial de um array "unidimensional", onde todos os elementos representam
  componentes em uma única dimensão.

  matriz: é uma estrutura de dados que pode armazenar uma coleção de valores organizados em linhas e
  colunas. cada valor em uma matriz é identificado por dois índices: um para a linha e outro para a
  coluna. essa estrutura de dados é "bidimensional" porque os elementos são organizados em duas dimensões,
  formando uma grade ou tabela.

*/

/* ========== vetor/array ========== */

const myVetor = ['item 1', 'item 2', 'item 3'];

/* ========== matriz ========== */

const myMatriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

/* ========== constructor 1 ========== */

const myArrayConstructor = new Array('person 1', 'person 2', 'person3');

/* ========== constructor 2 ========== */

const arrayEmpty = new Array(5); // [ <5 empty items> ]

/* ========== valor por referência / apontam para o mesmo local na memória ========== */

const sameArray = myArray;

/* ========== criar cópia ...spread ========== */

let spreadArray = [...myArray];