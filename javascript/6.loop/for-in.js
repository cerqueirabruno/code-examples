/*

FOR IN:

é uma estrutura de laço que permite percorrer as propriedades (ou "chaves") de um objeto.
esse loop é especialmente útil quando você precisa acessar cada chave de um objeto, mas também
pode ser usado para iterar sobre índices de arrays (embora o for...of seja mais recomendado para arrays)

*/



// objeto
const pessoa = {
    nome: "Maria",
    idade: 28,
    profissao: "Desenvolvedora"
};

for (let chave in pessoa) {
    console.log(chave); // exibe cada chave (nome, idade, profissao)
    console.log(pessoa[chave]); // exibe o valor associado a cada chave ("Maria", 28, "Desenvolvedora")
}


// array
const numeros = [10, 20, 30];

for (let indice in numeros) {
  console.log(indice); // exibe os índices: 0, 1, 2
  console.log(numeros[indice]); // exibe os valores: 10, 20, 30
}