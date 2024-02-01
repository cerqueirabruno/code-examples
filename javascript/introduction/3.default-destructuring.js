/*

  - uma propriedade que não existe em um objeto?
  - um valor em uma posição inexistente em um array?

*/


// ========== default destructuring (objeto) ========== //

const person = {
  name: 'joão',
  lastName: 'cavernoso',
  age: 22,
};

const { nationality = 'zimbabwean' } = person;

console.log(nationality); // zimbabwean


// ========== default destructuring (array) ========== //

const heroes = ['shrek', 'princess fiona'];

const [hero1, hero2, hero3 = 'puss in boots'] = heroes;

console.log(hero1); // shrek
console.log(hero2); // princess fiona
console.log(hero3); // puss in boots