/*

REST OPERATOR (...)

o operador rest é usado para representar um número indefinido de argumentos como um array.

*/

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



/*

SPREAD OPERATOR

permite "espalhar" elementos de arrays, objetos ou outros iteráveis em lugares onde múltiplos elementos ou argumentos são esperados.
ele é especialmente útil para manipular arrays e objetos de maneira mais concisa.

*/

// exemplo 1: copiar arrays
const arrayOriginal = [1, 2, 3];
const copiaArray = [...arrayOriginal]; // [1, 2, 3]

console.log(copiaArray);

// exemplo 2: copiar objetos
const objetoOriginal = { nome: "João", idade: 25 };
const copiaObjeto = { ...objetoOriginal }; // { nome: "João", idade: 25 }

console.log(copiaObjeto);

// exemplo 3: concatenar arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arrayConcatenado = [...array1, ...array2];

console.log(arrayConcatenado); // [1, 2, 3, 4, 5, 6]

// exemplo 4: passar argumentos para funções
const numeros = [4, 5, 6];
const maximo = Math.max(...numeros);

console.log(maximo); // 6

// exemplo 5: atualizar propriedades de objetos
const pessoa = { nome: "Ana", idade: 30 };
const pessoaAtualizada = { ...pessoa, idade: 31 };

console.log(pessoaAtualizada); // { nome: "Ana", idade: 31 }

// exemplo 6: desestrurção com rest parameter
const [primeiro, ...restante] = [1, 2, 3, 4];

const { nome, ...detalhes } = { nome: "Maria", idade: 28, cidade: "São Paulo" };

console.log(primeiro); // 1
console.log(restante); // [2, 3, 4]

console.log(nome); // Maria
console.log(detalhes); // { idade: 28, cidade: "São Paulo" }

