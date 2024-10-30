/*

COMPORTAMENTO DE ARGUMENTOS E PARÂMETROS EM FUNÇÕES

*/


// FUNÇÃO SEM PARÂMETRO E ARGUMENTO COM PARÂMETRO
function functionParams1() {
  console.log('Hello World');
}

functionParams1(1, 2, 3); // Hello World



// ARGUMENTS // OBJETO COM OS ARGUMENTOS QUE A FUNÇÃO RECEBEU
function functionParams2() {
  console.log(arguments);
}

functionParams2(1, 2, 3); // [Arguments] { '0': 1, '1': 2, '2': 3 }



// ARGUMENTS // OBJETO COM OS ARGUMENTOS QUE A FUNÇÃO RECEBEU (POR ÍNDICE)
function functionParams3() {
  console.log(arguments[3]);
}

functionParams3('A', 'G', 'P', 'L', 'Z'); // L



// + ARGUMENTO - PARÂMETRO
function functionParams4(a, b, c) {
  console.log(a, b, c);
}

functionParams4(1, 2, 3, 4, 5); // 1 2 3



// - ARGUMENTO + PARÂMETRO
function functionParams5(a, b, c) {
  console.log(a, b, c);
}

functionParams5(1, 2); // 1 2 undefined