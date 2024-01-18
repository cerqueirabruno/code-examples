/*

  é usado para iterar sobre as propriedades enumeráveis de um objeto. Ele itera sobre as
  chaves (nomes das propriedades) em um objeto. No caso de arrays, ele itera sobre os índices
  do array, mas não garante uma ordem específica.

*/


// objeto

const pessoa = {
  nome: 'Alice',
  idade: 30,
  cidade: 'São Paulo'
};

for (const chave in pessoa) {
  console.log(chave, pessoa[chave]);
}

// array
const frutas = ['maçã', 'banana', 'laranja'];

for (const indice in frutas) {
  console.log(indice, frutas[indice]);
}
