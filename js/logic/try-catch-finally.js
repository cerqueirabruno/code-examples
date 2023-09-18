// try = tentar;

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/throw
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/new
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch

// new: criar um objeto personalizado ou nativo do JavaScript;

// Error: é um objeto nativo do JavaScript que representa um erro.
//      quando você o chama com o operador new, é criada uma cópia desse objeto, a qual será lançada como
//      uma exceção no seu código;

// 


const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        throw new Error('Os valores devem ser numéricos');
    }
    return value1 + value2;
};

console.log(sum(2, '3'));
// ============================================================
// // try / catch / finally / throw statement

// [try...catch - JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)



// [Error - JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)

// try // tenta executar o código
// catch // bloco de código para lidar com qualquer erro
// throw // define um erro personalizado // throw new Error
// finally // bloco de código a ser executado independentemente do resultado