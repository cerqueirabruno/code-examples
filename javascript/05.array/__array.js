// ARRAY: um array em javascript é uma estrutura de dados que pode armazenar uma coleção de valores, sejam eles números, strings, objetos, funções ou outros tipos de dados. os arrays em javascript são indexados numericamente, o que significa que cada elemento em um array é acessado por um número chamado de índice.

// VETOR: é considerado um caso especial de um array "unidimensional", onde todos os elementos representam componentes em uma única dimensão.

// MATRIZ: é uma estrutura de dados que pode armazenar uma coleção de valores organizados em linhas e colunas. cada valor em uma matriz é identificado por dois índices: um para a linha e outro para a  coluna. essa estrutura de dados é "bidimensional" porque os elementos são organizados em duas dimensões, formando uma grade ou tabela.


const myArray = ['item 1', 'item 2', 'item 3']; // array ou vetor.

const myMatriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; // matriz 3x3.

const myArrayConstructor = new Array('person 1', 'person 2', 'person3'); // constructor.

const arrayEmpty = new Array(5); // [ <5 empty items> ].

const sameArray = myArray; // valor por referência / apontam para o mesmo local na memória.

const spreadArray = [...myArray]; // valor por cópia / apontam para locais diferentes na memória.

myArray[2] = 'other'; // alterar o índice 2.

delete myArray[1]; // deleta índice 1.

myArray.push(); // adiciona no final.

myArray.unshift(); // adiciona no início.

myArray.shift(); // deleta no início.

myArray.pop(); // deleta no final.

myArray.length; // tamanho.

/* 

Array.prototype.at();
Array.prototype.concat();
Array.prototype.copyWithin();
Array.prototype.entries();
Array.prototype.every();
Array.prototype.fill();
Array.prototype.filter();
Array.prototype.find();
Array.prototype.findIndex();
Array.prototype.findLast();
Array.prototype.findLastIndex();
Array.prototype.flat();
Array.prototype.flatMap();
Array.prototype.forEach();
Array.from();
Array.fromAsync();
Array.prototype.includes();
Array.prototype.indexOf();
Array.isArray();
Array.prototype.join();
Array.prototype.keys();
Array.prototype.lastIndexOf();
Array.prototype.map();
Array.of();
Array.prototype.pop();
Array.prototype.push();
Array.prototype.reduce();
Array.prototype.reduceRight();
Array.prototype.reverse();
Array.prototype.shift();
Array.prototype.slice();
Array.prototype.some();
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