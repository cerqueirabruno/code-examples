// ============================== exemplo 1
const myArray = [1, 2, 3, 4, 5];

const big = myArray.filter((elemento, indice, arrayCompleto) => {
    if (elemento >= 3) {
        return true;
    }
});

console.log(big); // output: [ 3, 4, 5 ]


// ============================== exemplo 2
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

// nomes com 5 ou mais caracteres
const pessoasComNomeGrande = pessoas.filter((elemento, indice, arrayCompleto) => {
    return elemento.nome.length >= 5;
});

// pesoas com mai de 50 anos de idade
const pessoasComMais50 = pessoas.filter((elemento, indice, arrayCompleto) => {
    return elemento.idade > 50;
});

// nomes que termina com 'a'
const terminaComA = pessoas.filter((elemento, indice, arrayCompleto) => {
    return elemento.nome.toLowerCase().endsWith('a');
});