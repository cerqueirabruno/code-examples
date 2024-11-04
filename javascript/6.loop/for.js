/*

FOR:

é uma das estruturas de repetição mais tradicionais e versáteis em JavaScript, usada para executar um bloco de código repetidamente enquanto uma condição for verdadeira

*/



// exemplo 1
for (let i = 1; i <= 5; i++) {
    console.log(i);
}



// exemplo 2
const frutas = ["maçã", "banana", "laranja"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}



// exemplo 3
for (let i = 1; i <= 5; i++) {
    if (i === 3) break; // encerra o loop quando i é 3
    console.log(i);
}



// exemplo 4
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue; // pula o número 3
    console.log(i);
}



// exemplo 5

