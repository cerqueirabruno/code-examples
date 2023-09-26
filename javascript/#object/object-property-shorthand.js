// é uma forma concisa de criar propriedades de objeto usando variáveis com o mesmo nome.

// ==================== exemplo 1.1

/*

  const heroes = [
    { name: 'Viúva Negra', universe: 'Marvel' },
    { name: 'Aquaman', universe: 'DC' },
    { name: 'André Noel', universe: 'Paralelo' }
  ];

  const heroGreeting = heroes.map((hero) => {
    return {
      name: hero.name,
      universe: hero.universe,
      greeting: `Olá, meu nome é ${hero.name} e eu sou do universo ${hero.universe}.`
    };
  });

  console.log(heroGreeting);

*/

// ==================== exemplo 1.2: código refatorado "object property shorthand" + propriedade adicional
const heroes = [
  { name: 'Viúva Negra', universe: 'Marvel' },
  { name: 'Aquaman', universe: 'DC' },
  { name: 'André Noel', universe: 'Paralelo' }
];

const heroGreeting = heroes.map(({ name, universe }) => {
  return {
    name,
    universe,
    greeting: `Olá, meu nome é ${name} e eu sou do universo ${universe}.`
  };
});

console.log(heroGreeting);

// ==================== exemplo 2
const nome = 'joão';
const idade = 30;
const profissao = 'developer';

const pessoa = {
  nome,
  idade,
  profissao
};

console.log(pessoa);