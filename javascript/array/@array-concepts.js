/*

ARRAY: é uma estrutura de dados que pode armazenar uma coleção de valores, sejam eles números, strings, objetos, funções ou outros tipos de dados.
os arrays em javascript são indexados numericamente, o que significa que cada elemento em um array é acessado por um número chamado de índice.

VETOR: é considerado um caso especial de um array "unidimensional", onde todos os elementos representam componentes em uma única dimensão.

MATRIZ: é uma estrutura de dados que pode armazenar uma coleção de valores organizados em linhas e colunas. cada valor em uma matriz é identificado por dois índices:
  um para a linha e outro para a  coluna. essa estrutura de dados é "bidimensional" porque os elementos são organizados em duas dimensões, formando uma grade ou tabela.

*/

// array ou vetor
const myArray = ['item 1', 'item 2', 'item 3'];

// array matriz 3x3
const myMatriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// array construtor
const myArrayConstructor = new Array('person 1', 'person 2', 'person3');

// array com tamanho definido e com elementos vazíos
const arrayEmpty = new Array(5); // [ <5 empty items> ]

// valor por referência (apontam para o mesmo local na memória)
const myArray1 = ['item 1', 'item 2', 'item 3'];
const myArray2 = myArray1;

// valor por cópia (apontam para locais diferentes na memória) (... = spread operator)
const myArray3 = ['item 1', 'item 2', 'item 3'];
const myArray4 = [...myArray3];

// alterar o valor por índice
const myArray5 = ['object1', 'object2', 'object3'];
myArray5[2] = 'other';

// deletando um elemento por índice
const myArray6 = ['object1', 'object2', 'object3'];
delete myArray6[1];

// adiciona no final
myArray.push();

// adiciona no início
myArray.unshift();

// deleta no final
myArray.pop();

// deleta no início
myArray.shift();

// verificar o tamanho do array
myArray.length;
