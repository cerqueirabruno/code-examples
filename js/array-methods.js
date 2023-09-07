/* ========== ========== métodos ========== ========== */
Array.prototype.at();
Array.prototype.concat(); // combina dois ou mais arrays e retorna um novo array resultante;
Array.prototype.copyWithin();
Array.prototype.entries();
Array.prototype.every(); // verifica se todos os elementos do array passam em um teste especificado por uma função de callback;
Array.prototype.fill();
Array.prototype.filter(); // cria um novo array com todos os elementos que passam em um teste especificado por uma função de callback;
Array.prototype.find(); // retorna o primeiro elemento do array que passa em um teste especificado por uma função de callback;
Array.prototype.findIndex();
Array.prototype.findLast();
Array.prototype.findLastIndex();
Array.prototype.flat();
Array.prototype.flatMap();
Array.prototype.forEach(); // itera sobre cada elemento do array e executa uma função de callback para cada um (não retorna um novo array);
Array.from();
Array.fromAsync();
Array.prototype.includes(); // verifica se um elemento está presente no array e retorna true ou false;
Array.prototype.indexOf();
Array.isArray();
Array.prototype.join(); // converte todos os elementos de um array em uma string e a retorna;
Array.prototype.keys();
Array.prototype.lastIndexOf();
Array.prototype.map(); // aplicar uma função a cada elemento do array e criar um novo array com os resultados dessas aplicações;
Array.of();
Array.prototype.pop(); // remove o último elemento do array e o retorna;
Array.prototype.push(); // adiciona um ou mais elementos ao final do array e retorna o novo comprimento do array;
Array.prototype.reduce(); // executa uma função de callback em cada elemento do array, resultando em um único valor acumulado;
Array.prototype.reduceRight();
Array.prototype.reverse();
Array.prototype.shift();
Array.prototype.slice();
Array.prototype.some();
Array.prototype.sort(); // ordena os elementos do array in-place e retorna o array ordenado;
Array.prototype.splice();
Array.prototype.toLocaleString();
Array.prototype.toReversed();
Array.prototype.toSorted();
Array.prototype.toSpliced();
Array.prototype.toString();
Array.prototype.unshift(); // adiciona um ou mais elementos ao início do array e retorna o novo comprimento do array;
Array.prototype.values();
Array.prototype.with();

/* ========== ========== CONCAT ========== ========== */

const a1 = [1, 2, 3, 4, 5];
const a2 = [10, 25, 30, 45];

const a3 = a1.concat(a2, [11, 22, 33, 44], 'bruno');

/* ========== ========== FILTER ========== ========== */

const b1 = [1, 2, 3, 4, 5];

const b2 = b1.filter((elemento, indice, arrayCompleto) => {
    if (elemento >= 3) {
        return true;
    }
});

console.log(b2);

/* ========== ========== FILTER ========== ========== */

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const pessoasComNomeGrande = pessoas.filter((elemento, indice, arrayCompleto) => {
    return elemento.nome.length >= 5;
});

const pessoasComMais50 = pessoas.filter((elemento, indice, arrayCompleto) => {
    return elemento.idade > 50;
});

const terminaComA = pessoas.filter((elemento, indice, arrayCompleto) => {
    return elemento.nome.toLowerCase().endsWith('a');
});

/* ========== ========== MAP 1 ========== ========== */
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const dobro = numeros.map((elemento, indice, arrayCompleto) => {
    return elemento * 2;
});

/* ========== ========== MAP 2 ========== ========== */

// retorna apenas o nome;
let nomesPessoa = pessoas.map((elemento, indice, array) => {
    return elemento.nome;
});

// retornar apenas a idade
let nomesIdade = pessoas.map((elemento, indice, array) => {
    return elemento.idade;
});

/* ========== ========== forEach ========== ========== */

let alunos = ['aluno 1', 'aluno 2', 'aluno 3', 'aluno 4', 'aluno 5'];

alunos.forEach((item, posicaoDoElemento, arrayCompleto) => {
    console.log(arrayCompleto);
});

/* ========== ========== slice (fatiar) ========== ========== */

console.log(alunos.slice(1, 3)); // OBS.: o 3 não é incluido

/* ========== ==========  ========== ========== */