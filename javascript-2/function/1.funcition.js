// função: é um conjunto de instruções que executa uma tarefa ou calcula um valor;

// sintaxe
function nomeDaFuncao (parametro1, parametro2) {
  // código a ser executado
};

nomeDaFuncao('argumento1', 'argumento2'); // invoca a função;

// função hoisting
functionHoisting();

function functionHoisting(params) {
  console.log('Hello World');
}

// function expression
const functionExpression = function (params) {
  console.log('Hello World');
}

functionExpression();

// arrow function
const arrowFunction = () => {
  console.log('Hello World');
}

arrowFunction();

// objeto dentro de função
const myObject = {
  myFunction: function () {
    console.log('Hello World');
  }
};

myObject.myFunction();