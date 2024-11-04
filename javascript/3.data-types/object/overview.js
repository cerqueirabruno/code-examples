/*

OBJETOS:
é uma coleção de pares de chave-valor, onde cada chave (ou "propriedade") é associada a um valor.
esses valores podem ser de qualquer tipo: strings, números, arrays, funções e até mesmo outros objetos.

*/


// objeto
const pessoa = {
    nome: "João",
    idade: 30,
    saudacao: function () {
        console.log("Olá, meu nome é " + this.nome);
    }
};

// acessando propriedades e métodos de um objeto
console.log(pessoa.nome); // "João"
console.log(pessoa["idade"]); // 30
pessoa.saudacao(); // "Olá, meu nome é João"



// obejtos aninhados
const empresa = {
    nome: "TechCorp",
    endereco: {
        cidade: "São Paulo",
        rua: "Rua Principal",
    },
    funcionarios: ["Alice", "Carlos", "Beatriz"]
};

console.log(empresa.endereco.cidade); // "São Paulo"