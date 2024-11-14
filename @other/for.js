// estrutura de repetição

for (let index = 1; index <= 100; index += 1) {
    console.log(index);
}

// inicialização: let index = 1;
// condição: index <= 100;
// atualização: index += 1

/* ========== ========== ========== ========== ========== ========== ========== ========== ========== ==========  */

// exemplo 1 - somando os números de um array
const numeros = [2, 19, 23, 4, 8, 10];
let soma = 0;

for (let index = 0; index < numeros.length; index += 1) {
    soma += numeros[index];
};

console.log(soma);

/* ========== ========== ========== ========== ========== ========== ========== ========== ========== ==========  */

// exemplo 2 - comportamento + template literals
const itens = ['item A', 'item B', 'item C', 'item D', 'item E', 'item F'];

for (let index = 0; index < itens.length; index += 1) {
    console.log(`${index} - ${itens[index]}`);
}

/* ========== ========== ========== ========== ========== ========== ========== ========== ========== ==========  */

// for aninhado (horas)
for (let horas = 0; horas < 24; horas += 1) {
    for (let minutos = 0; minutos < 60; minutos += 1) {
        console.log(`agora são ${horas}h e ${minutos}m`)
    }
}

// for aninhado (percorrendo uma matriz bidimensional)
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
}

// for aninhado (tabuada)
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        const resultado = i * j;
        console.log(`${i} x ${j} = ${resultado}`);
    }
}