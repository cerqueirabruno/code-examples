/*

ARRAY:
é uma estrutura de dados que pode armazenar uma coleção de valores, sejam eles números, strings, objetos, funções ou outros tipos de dados.
os arrays em javascript são indexados numericamente, o que significa que cada elemento em um array é acessado por um número chamado de índice.

VETOR:
é considerado um caso especial de um array "unidimensional", onde todos os elementos representam componentes em uma única dimensão.

MATRIZ:
é uma estrutura de dados que pode armazenar uma coleção de valores organizados em linhas e colunas. cada valor em uma matriz é identificado por dois índices:
um para a linha e outro para a  coluna. essa estrutura de dados é "bidimensional" porque os elementos são organizados em duas dimensões, formando uma grade ou tabela.

*/

// array ou vetor
const myArray = ['item 1', 'item 2', 'item 3', 1, 2, 3, { name: 'object' }, () => {}, true, false, null, undefined];

// array matriz 3x3
const myMatriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// array construtor
const myArrayConstructor = new Array('person 1', 'person 2', 'person3');

// array com tamanho definido e com elementos vazíos
const arrayEmpty = new Array(5); // [ <5 empty items> ]

// valor por referência (apontam para o mesmo local na memória)
const dataReferenceArray1 = ['item 1', 'item 2', 'item 3'];
const dataReferenceArray2 = dataReferenceArray1;

// valor por cópia (apontam para locais diferentes na memória) (... = spread operator)
const arrayCopy1 = ['item 1', 'item 2', 'item 3'];
const arrayCopy2 = [...arrayCopy1];

// alterar o valor por índice
const editArray = ['object1', 'object2', 'object3'];
editArray[2] = 'other'; // ['object1', 'object2', 'other']

// deletando um elemento por índice
const deleteArrayIndice = ['object1', 'object2', 'object3'];
delete deleteArrayIndice[1]; // ['object1', <empty>, 'object3']

// adiciona no final
myArray.push('item 4');

// deleta no final
myArray.pop();

// adiciona no início
myArray.unshift('item 0');

// deleta no início
myArray.shift();

// verificar o tamanho do array
const tamanho = myArray.length;



/*

MÉTODOS ARRAYS:

Array.prototype.at(); 
Array.prototype.concat(); // retorna um novo array resultante da concatenação de dois ou mais arrays.
Array.prototype.copyWithin();
Array.prototype.entries();
Array.prototype.every(); // verifica se todos os elementos do array passam em um teste especificado por uma função, retorna true ou false.
Array.prototype.fill();
Array.prototype.filter(); // cria um novo array com todos os elementos que passam no teste especificado por uma função.
Array.prototype.find(); // retorna o primeiro elemento do array que satisfaz a função de teste fornecida.
Array.prototype.findIndex();
Array.prototype.findLast();
Array.prototype.findLastIndex();
Array.prototype.flat();
Array.prototype.flatMap();
Array.prototype.forEach();
Array.from();
Array.fromAsync();
Array.prototype.includes(); // verifica se um array contém um determinado elemento, retornando true ou false conforme apropriado.
Array.prototype.indexOf();
Array.isArray();
Array.prototype.join();
Array.prototype.keys();
Array.prototype.lastIndexOf();
Array.prototype.map(); // cria um novo array com os resultados da chamada de uma função fornecida em cada elemento do array.
Array.of();
Array.prototype.pop(); // remove o último elemento de um array e o retorna.
Array.prototype.push(); // adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.
Array.prototype.reduce(); // executa uma função redutora em cada elemento do array, resultando em um único valor de retorno.
Array.prototype.reduceRight();
Array.prototype.reverse(); // inverte a ordem dos elementos de um array.
Array.prototype.shift(); // remove o primeiro elemento de um array e o retorna.
Array.prototype.slice(); // retorna uma cópia superficial de uma porção de um array em um novo array.
Array.prototype.some(); // verifica se pelo menos um elemento do array passa no teste especificado por uma função, retorna true ou false.
Array.prototype.sort();
Array.prototype.splice();
Array.prototype.toLocaleString();
Array.prototype.toReversed();
Array.prototype.toSorted();
Array.prototype.toSpliced();
Array.prototype.toString();
Array.prototype.unshift();
Array.prototype.values();
Array.prototype.with();

*/