/* ========== ==========  ========== ========== */

// armazena vários valores e elementos em uma variável;

/* ========== ========== array ========== ========== */

let minhaArray = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8']; // literal

let minhaArray2 = new Array('bruno', 'lorraine', 'paulo'); // construtor

/* ========== ========== acessar ========== ========== */



/* ========== ========== alterar ========== ========== */

minhaArray[0] = 'bruno';

/* ========== ========== adicionar/remover ========== ========== */

minhaArray.push(); // add fim;
minhaArray.pop(); // remove fim;
minhaArray.unshift(); // add início;
minhaArray.shift(); // remove fim;

/* ========== ========== deletar ========== ========== */

delete minhaArray[7];

/* ========== ========== tamanho ========== ========== */

console.log(minhaArray.length);

/* ========== ========== último elemento ========== ========== */

console.log(minhaArray.length -1);

/* ========== ========== array = valor por referência ========== ========== */

let celulares = ['exemplo1', 'exemplo2', 'exemplo3'];

let telefones = celulares; // apotam para o mesmo local;

/* ========== ========== spread ========== ========== */

let nomes = ['exemplo1', 'exemplo2', 'exemplo3'];

let novo = [...nomes]; // cria-se uma cópia;

/* ========== ========== split (converter string em array) ========== ========== */

let cpu = 'exemplo1 exemplo2 exemplo3';

let novosCpus = cpu.split(' ');

console.log(novosCpus);
