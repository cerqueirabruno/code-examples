// array: um array em javascript é uma estrutura de dados que pode armazenar uma coleção de valores, sejam eles números, strings, objetos, funções ou outros tipos de dados. os arrays em javascript são indexados numericamente, o que significa que cada elemento em um array é acessado por um número chamado de índice.

// vetor: é considerado um caso especial de um array unidimensional, onde todos os elementos representam componentes em uma única dimensão.

// matriz: é uma estrutura de dados que pode armazenar uma coleção de valores organizados em linhas e colunas. cada valor em uma matriz é identificado por dois índices: um para a linha e outro para a coluna. essa estrutura de dados é bidimensional porque os elementos são organizados em duas dimensões, formando uma grade ou tabela.

const myArray = ['item 1', 'item 2', 'item 3', 10, 20, true, false, undefined, null, NaN]; // vetor // array unidimensional

const myMatriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; // matriz // array bidimencional

const myArrayConstructor = new Array('person 1', 'person 2', 'person3') // construtor

const arrayEmpty = new Array(5); // [ <5 empty items> ] // reserva 5 posições

myArray[0] = 'other'; // alterar

myArray.push(); // adicionar no fim

myArray.pop(); // remove do fim

myArray.unshift(); // adicionar no início

myArray.shift(); // remove do fim

delete myArray[1]; // deleta

myArray.length; // tamanho

let sameArray = myArray; // valor por referência: apontam para o mesmo local

let spreadArray = [...myArray]; // cria-se uma cópia de 'myArray'

// métodos
Array.prototype.at();
Array.prototype.concat();
Array.prototype.copyWithin();
Array.prototype.entries(); /* attention */
Array.prototype.every(); /* attention */
Array.prototype.fill();
Array.prototype.filter(); /* attention */
Array.prototype.find(); /* attention */
Array.prototype.findIndex();
Array.prototype.findLast();
Array.prototype.findLastIndex();
Array.prototype.flat();
Array.prototype.flatMap();
Array.prototype.forEach(); /* attention */
Array.from();
Array.fromAsync();
Array.prototype.includes(); /* attention */
Array.prototype.indexOf();
Array.isArray();
Array.prototype.join(); /* attention */
Array.prototype.keys(); /* attention */
Array.prototype.lastIndexOf();
Array.prototype.map(); /* attention */
Array.of();
Array.prototype.pop(); /* attention */
Array.prototype.push(); /* attention */
Array.prototype.reduce(); /* attention */
Array.prototype.reduceRight();
Array.prototype.reverse();
Array.prototype.shift(); /* attention */
Array.prototype.slice(); /* attention */
Array.prototype.some(); /* attention */
Array.prototype.sort(); /* attention */
Array.prototype.splice(); /* attention */
Array.prototype.toLocaleString();
Array.prototype.toReversed();
Array.prototype.toSorted();
Array.prototype.toSpliced();
Array.prototype.toString(); /* attention */
Array.prototype.unshift(); /* attention */
Array.prototype.values(); /* attention */
Array.prototype.with();