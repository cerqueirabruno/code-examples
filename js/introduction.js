// tipos de variáveis
var name = 'bruno'; // escopo global
let id = 123; // escopo de bloco
const location = 'Brasil' // escopo de bloco

// boas práticas para nomeação de variáveis
// * precisam ter nomes significativos
// * não pode criar variáveis com palavras reservadas ou números
// * não podem conter espaços ou hifens
// * camelcase: 2 ou + palavras, somente a primeira inicía maiúscula
// * case-sensitive: letra maiúscula # letra minúscula
// * não podemos redeclarar variáveis const
// * não criar variáveis sem nome
// * não pode iniciar variáveis com número

// tipos de dados: primitivos
let dadoPrimitivo1 = String;
let dadoPrimitivo2 = Number;
let dadoPrimitivo3 = Boolean;
let dadoPrimitivo4 = undefined;
let dadoPrimitivo5 = null;
let dadoPrimitivo6 = BigInt;
let dadoPrimitivo7 = Symbol;

// tipos de dados: referência
let dadoReferência1 = Object;
let dadoReferência2 = Array;
let dadoReferência3 = Function;

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