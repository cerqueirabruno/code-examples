/*

SET (CONJUNTO)

- estrutura de dados que representa uma coleção de valores exclusivos e não repetidos.
- não tem índices, como arrays;
- não é ordenado;

*/


// cria um conjunto vazio;
const meuSet = new Set();

// adiciona elementos;
meuSet.add(1);
meuSet.add(2);
meuSet.add(3);
meuSet.add(2); // ignorado;

// verifica se um elemento existe no conjunto;
console.log(meuSet.has(2)); // true
console.log(meuSet.has(4)); // false

// remover um elemento;
meuSet.delete(2);

// iterando sobre os elementos de um conjunto:
for (const item of meuSet) {
    console.log(item);
};