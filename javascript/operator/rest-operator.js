// é uma feature do ES6 que permite que você agrupe informações em um lugar só

// exemplo 1
const countParams = (...args) => {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(countParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(countParams('string', null, [1, 2, 3], {})); // Você passou 4 parâmetros para a função.

// exemplo 2
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88