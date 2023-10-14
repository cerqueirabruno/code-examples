/* 

    é um conceito fundamental relacionado a objetos e herança. Cada objeto em JavaScript 
    possui um prototype, que é um objeto a partir do qual ele herda propriedades e métodos.
    Isso é parte do sistema de herança baseado em protótipos que diferencia JavaScript de outras
    linguagens de programação.

*/



/*

    — objetos e prototypes:
    em javascript, objetos são criados a partir de construtores ou diretamente com objetos 
    literais. cada objeto tem um prototype, que é um objeto que contém propriedades e métodos
    que podem ser compartilhados por outros objetos.

*/



/*

    — Constructor Functions:
    você pode criar construtores de objetos usando funções. Quando você cria uma função construtora, 
    você pode adicionar propriedades e métodos ao prototype da função. Qualquer objeto criado a 
    partir dessa função construtora herda as propriedades e métodos do prototype

*/

function Pessoa(nome) {
    this.nome = nome;
}

Pessoa.prototype.cumprimentar = function () {
    console.log(`Olá, meu nome é ${this.nome}`);
}

const pessoa1 = new Pessoa('Alice');
pessoa1.cumprimentar(); // Saída: Olá, meu nome é Alice



/*

    — Herança de Prototypes:
    Um objeto pode herdar propriedades e métodos do prototype do objeto do qual foi criado. Isso cria
    uma cadeia de protótipos, onde um objeto pode acessar as propriedades e métodos do seu próprio
    prototype e do prototype do seu objeto "pai" e assim por diante.

*/

function Estudante(nome, matricula) {
    this.nome = nome;
    this.matricula = matricula;
}

Estudante.prototype = new Pessoa(); // Herda do protótipo da Pessoa
const estudante1 = new Estudante('Bob', '12345');
estudante1.cumprimentar(); // Saída: Olá, meu nome é Bob
