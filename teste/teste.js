const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

// retornar apenas os nomes
let sonomes = pessoas.map((elemento, indice, arrayCompleto) => {
    return elemento.nome;
});





// const idades = pessoas.map(obj => ({ idade: obj.idade }));

// const comIds = pessoas.map(function (obj, indice) {
//     const newObj = { ...obj };
//     newObj.id = indice;
//     return newObj;
// });

console.log(sonomes);