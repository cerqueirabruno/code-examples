// cria um novo array chamando uma função para cada elemento do array.
// não executa a função para elementos vazios.
// não altera o array original.

// ============================== sintaxe
const newArray = array.map((elemento, indice, arrayCompleto) => {
  // ...
});

// ============================== exemplo 1
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// dobro
const dobro = numeros.map((elemento, indice, arrayCompleto) => {
  return elemento * 2;
});

console.log(dobro);