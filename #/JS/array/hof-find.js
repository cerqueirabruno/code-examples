// FIND = ENCONTRAR
// encontrar o 'primeiro elemento' em um array que atenda a uma determinada condição ou undefined se nenhum elemento atender à condição;

const numbers = [1, 2, 3, 4, 5];

const evenNumber = numbers.find((elemento) => {
  return elemento % 2 === 0;
});

console.log(evenNumber); // 2