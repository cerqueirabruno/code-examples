// função sem parâmetro e argumento com parâmetro
function functionParams1() {
  console.log('Hello World');
}

functionParams1(1, 2, 3); // Hello World

// arguments // objeto com os argumentos que a função recebeu
function functionParams2() {
  console.log(arguments);
}

functionParams2(1, 2, 3); // [Arguments] { '0': 1, '1': 2, '2': 3 }

// arguments // objeto com os argumentos que a função recebeu
function functionParams3() {
  console.log(arguments[3]);
}

functionParams3('A', 'G', 'P', 'L', 'Z'); // L

// + argumento e - parâmetro
function functionParams4(a, b, c) {
  console.log(a, b, c);
}

functionParams4(1, 2, 3, 4, 5); // 1 2 3

// - argumento e + parâmetro
function functionParams5(a, b, c) {
  console.log(a, b, c);
}

functionParams5(1, 2); // 1 2 undefined
