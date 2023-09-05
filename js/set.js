// "set" (conjunto) é uma estrutura de dados que representa uma coleção de valores exclusivos e não repetidos;
// isso significa que, em um conjunto, você não pode ter elementos duplicados;
// os conjuntos são úteis quando você precisa armazenar um conjunto de valores únicos e não se preocupa com a ordem em que esses valores são armazenados.

// criando um conjunto;
const meuSet = new Set();

// adicionando elementos a um conjunto;
meuSet.add(1);
meuSet.add(2);
meuSet.add(3);
meuSet.add(2); // tentando adicionar um valor duplicado, que será ignorado

// verificando se um elemento existe em um conjunto;
console.log(meuSet.has(2)); // true
console.log(meuSet.has(4)); // false

// removendo elementos de um conjunto;
meuSet.delete(2); // remove o valor 2 do conjunto;

// iterando sobre os elementos de um conjunto:
for (const item of meuSet) {
    console.log(item);
};


// OBS.: lembre-se de que os conjuntos não têm índices, como arrays;
// eles são mais adequados quando você precisa garantir que os valores em uma coleção sejam únicos e não se preocupa com a ordem desses valores;