// é uma referência a um objeto que é determinado pelo contexto em que ela é usada. o valor de
// this pode variar dependendo de como uma função é chamada ou de onde ela é usada. aqui estão alguns
// dos cenários mais comuns em que o valor de this é determinado:

// ============================== //

// em um método de objeto:
// quando uma função é chamada como um método de um objeto, o valor de this se refere ao próprio objeto.

const pessoa = {
  nome: 'alice',
  saudacao: function () {
    console.log(`olá, ${this.nome}!`);
  }
};

pessoa.saudacao(); // "olá, alice!"

// ============================== //

// em uma função global:
// quando uma função é chamada no escopo global, o valor de this se refere ao objeto global, que é
//  window no contexto do navegador ou global no node.js.

function funcaoGlobal() {
  console.log(this === window); // No navegador, isso é true
  console.log(this === global); // No Node.js, isso é true
}

funcaoGlobal();

// ============================== //

// Em uma função construtora:
// Quando uma função é usada como um construtor para criar objetos usando new, o valor de this se refere a uma nova instância do objeto sendo criada.

function Pessoa(nome) {
  this.nome = nome;
}

const alice = new Pessoa('Alice');
console.log(alice.nome); // "Alice"

// ============================== //



