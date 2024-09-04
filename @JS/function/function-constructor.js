// função construtora:  é uma função que é usada juntamente com a palavra-chave new para criar objetos. o nome da função inicia com letra masiúscula.

// EXAMPLE 1
function Personal(name, surname) {
  this.name = name;
  this.surname = surname;
};

const personal1 = new Personal('joão', 'silva');
const personal2 = new Personal('miguel', 'ferreira');

// EXAMPLE 2
function Car(name, year) {
  // propriedade privada (não acessivel por fora da função)
  const ID = 1234567890; 
  const PalavraPasse = () => {};

  // propriedade pública (acesivel por fora da função)
  this.name = name;
  this.year = year;
  this.log = () => {
    console.log(`${name}: eu sou um carro!`);
  }
};

const car1 = new Car('gol', '2000');
const car2 = new Car('palio', '1990');

car1.log(); // Output: gol: eu sou um carro!
