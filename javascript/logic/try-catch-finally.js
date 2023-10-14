// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/throw
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/new
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch

/*



*/

/*

    try: é usado para envolver um trecho de código onde você suspeita que possa ocorrer um erro;
    catch: permite definir um bloco de código a ser executado, caso ocorra um erro no bloco try;
    finally: é opcional e é usado para conter código que deve ser executado, independentemente de ocorrer uma exceção ou não.
    throw:

    new:
    Error:

*/


const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        throw new Error('Os valores devem ser numéricos');
    }
    return value1 + value2;
};

console.log(sum(2, '3')); // Error: Os valores devem ser numéricos


// ================================================== //

function divide(a, b) {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
}

try {
    const resultado = divide(10, 0);
    console.log("O resultado da divisão é:", resultado);
} catch (erro) {
    console.error("Ocorreu um erro:", erro.message);
}
