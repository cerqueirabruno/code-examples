// função: é um conjunto de instruções que executa uma tarefa ou calcula um valor;

// sintaxe
function nomeDaFuncao (parametro1, parametro2) {
  // código a ser executado
};

nomeDaFuncao('argumento1', 'argumento2'); // invoca a função;

// função hoisting: é o comportamento padrão do JavaScript de mover todas as declarações de função para o topo do escopo atual;
functionHoisting();

function functionHoisting(params) {
  console.log('Hello World');
}

// function expression: é uma função que pode ser atribuída a uma variável;
const functionExpression = function (params) {
  console.log('Hello World');
}

functionExpression();

// arrow function: é uma forma mais curta de escrever uma função;
const arrowFunction = () => {
  console.log('Hello World');
}

arrowFunction();

// objeto dentro de função: é possível criar um objeto dentro de uma função;
const myObject = {
  myFunction: function () {
    console.log('Hello World');
  }
};

myObject.myFunction();