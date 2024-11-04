/*

FOR OF:

usada para percorrer elementos de objetos iteráveis, como arrays, strings, mapas (map), conjuntos (set), entre outros.
ao contrário do for...in, que itera sobre as chaves ou índices, o for...of percorre diretamente os valores desses objetos
iteráveis, tornando-o mais intuitivo e conveniente para trabalhar com listas de valores.

*/



// exemplo 1: array
const numeros = [10, 20, 30];

for (let numero of numeros) {
  console.log(numero);  // exibe cada valor do array: 10, 20, 30
}



// exemplo 2: string
const palavra = "JavaScript";

for (let letra of palavra) {
  console.log(letra);  // exibe cada letra da string: "J", "a", "v", "a", "S", "c", "r", "i", "p", "t"
}



// exemplo 3: map
const mapa = new Map();
mapa.set("nome", "João");
mapa.set("idade", 25);

console.log(mapa);

for (let [chave, valor] of mapa) {
  console.log(chave, valor);  // exibe "nome João" e "idade 25"
}



// exemplo 4: set
const conjunto = new Set([1, 2, 3, 4]);

for (let valor of conjunto) {
  console.log(valor);  // exibe 1, 2, 3, 4
}



// for in vs for of

// for in: itera sobre chaves/índices de objetos, sendo mais adequado para objetos simples e menos recomendado para arrays.
// for of: itera sobre valores de objetos iteráveis, como arrays, strings, Map, e Set.