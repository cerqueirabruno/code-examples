/*

OBJECT DESTRUCTURING (DESESTRUTURAÇÃO DE OBJETOS)

permite extrair valores de propriedades de objetos e atribuí-los a variáveis de forma concisa e conveniente.

*/



// exemplo 1:
const pessoa = {
    nome: 'joão',
    idade: 30,
    cidade: 'são paulo'
};

const { nome, idade, cidade } = pessoa;

console.log(nome); // output: 'joão';
console.log(idade); // output: 30;
console.log(cidade); // output: 'são paulo';


// exemplo 2: renomeando variáveis
const cliente = {
    nome: 'maria',
    idade: 25,
    cidade: 'rio de janeiro'
};

const { nome: nomeDaPessoa, idade: idadeDaPessoa, cidade: cidadeDaPessoa } = cliente;

console.log(nomeDaPessoa); // output: 'maria'
console.log(idadeDaPessoa); // output: 25
console.log(cidadeDaPessoa);  // output: 'rio de janeiro'

// exemplo 3:
const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
        specieName: 'Human',
        jedi: true,
    },
    homeWorld: {
        name: 'Tatooine',
        population: '200000',
    },
};

const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

// exemplo 4:
const humans = [
    { nome: 'João', title: 'Engenheiro', planet: 'Marte' },
    { nome: 'Maria', title: 'Designer', planet: 'Marte' },
    { nome: 'Pedro', title: 'Programador', planet: 'Marte' }
];

const namesAndTitle = humans.map(({ nome, title }) => ({ nome, title }));

console.log(namesAndTitle); // output: [ { nome: 'João', title: 'Engenheiro' }, { nome: 'Maria', title: 'Designer' }, { nome: 'Pedro', title: 'Programador' } ]


// exemplo 5: default destructuring
const person = {
    name: 'joão',
    lastName: 'cavernoso',
    age: 22,
};

const { nationality = 'zimbabwean' } = person;

console.log(nationality); // zimbabwean
console.log(person); // { name: 'joão', lastName: 'cavernoso', age: 22 }


// exemplo 6: object property shorthand
const heroes = [
    { name: 'Viúva Negra', universe: 'Marvel' },
    { name: 'Aquaman', universe: 'DC' },
    { name: 'André Noel', universe: 'Paralelo' }
];

const heroGreeting = heroes.map((hero) => {
    return {
      nome: hero.name, // modificando a propriedade name para nome
      universo: hero.universe, // modificando a propriedade universe para universo
      saudacao: `Olá, meu nome é ${hero.name} e eu sou do universo ${hero.universe}.` // adicionando uma nova propriedade
    };
});

console.log(heroGreeting);


// exemplo 7: (refact to example 6)

/*

const heroes = [
  { name: 'viúva negra', universe: 'marvel' },
  { name: 'aquaman', universe: 'dc' },
  { name: 'andré noel', universe: 'paralelo' }
];

const heroGreeting = heroes.map(({ name, universe }) => {
  return {
    name,
    universe,
    greeting: `olá, meu nome é ${name} e eu sou do universo ${universe}.`
  };
});

console.log(heroGreeting);

*/


// exemplo 8: object property shorthand

/* 

const nome = 'joão';
const idade = 30;
const profissao = 'developer';

const pessoa = {
  nome,
  idade,
  profissao
};

console.log(pessoa);

*/