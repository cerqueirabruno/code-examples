// example 1: é um tipo que representa a ausência de qualquer tipo. normalmente é usado como tipo de retorno de funções que não retornam nenhum valor.
function sayHello(): void {
  console.log("olá!");
};

const result: void = sayHello(); // result será undefined, pois a função não retorna nenhum valor.





// example 2: declarar tipos de variáveis quando você não tem intenção de atribuir nenhum valor a elas.
let unusable: void;