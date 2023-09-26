// tipos de variáveis
var name = 'bruno'; // escopo global
let id = 123; // escopo de bloco
const location = 'Brasil' // escopo de bloco

// boas práticas para nomeação de variáveis;
// - precisam ter nomes significativos;
// - não pode criar variáveis com palavras reservadas ou números;
// - não podem conter espaços ou hifens;
// - camelcase: 2 ou + palavras, somente a primeira inicía maiúscula;
// - case-sensitive: letra maiúscula # letra minúscula;
// - não podemos redeclarar variáveis const;
// - não criar variáveis sem nome;
// - não pode iniciar variáveis com número;

// tipos de dados: primitivos
String;
Number;
Boolean;
undefined;
null;
BigInt;
Symbol;

// tipos de dados: referência
Object;
Array;
Function;

// typeof (imprimir o tipo da variável)
let numberValue = 42;
console.log(typeof numberValue); // number

let stringValue = "hello, world!";
console.log(typeof stringValue); // string

// valor truthy (valores avaliados como falso em javascript)
// * falsy
// * 0
// * ''
// * null
// * undefined
// * NaN

// hoisting
// instanceof
// métodos consoles;
console.log();
console.error();
console.warn();
console.assert();
console.table();
console.count();


const gato = 'pandora';

const nomes =
  `nome 1: bruno
nome 2: lorraine
nome 3: ${gato}`;

console.log(nomes);