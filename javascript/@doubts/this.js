/*

THIS
é uma referência a um objeto que é determinado pelo contexto em que ela é usada.
o valor de this pode variar dependendo de como uma função é chamada ou de onde ela é usada.

*/

// exemplo 1 - método de objeto - quando uma função é chamada como um método de um objeto, o valor de this se refere ao próprio objeto.
const pessoa = {
    nome: 'alice',
    saudacao: function () {
        console.log(`olá, ${this.nome}!`);
    }
};

pessoa.saudacao(); // "olá, alice!"


// exemplo 2 - quando uma função é chamada no escopo global, o valor de this se refere ao objeto global, que é window no contexto do navegador ou global no node.js.
function funcaoGlobal() {
    console.log(this === global); // no node.js, isso é true
    console.log(this === window); // no navegador, isso é true
}

funcaoGlobal();


// exemplo 3 - função construtora - quando uma função é chamada com o new operador, o valor de this se refere a um novo objeto que está sendo criado.
function Pessoa(nome) {
    this.nome = nome;
}

const alice = new Pessoa('Alice');

console.log(alice.nome); // "Alice"