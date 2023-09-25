// a desestruturação de objetos (object destructuring) é uma funcionalidade do javascript que permite extrair valores de propriedades de objetos e atribuí-los a variáveis de forma concisa e conveniente. essa técnica torna mais fácil e legível o acesso a propriedades de objetos aninhados ou a extração de propriedades específicas de um objeto.


// ==================== exemplo 1: criando variáveis com o nome da propriedade ==================== //

const pessoa = {
  nome: 'joão',
  idade: 30,
  cidade: 'são paulo'
};

const { nome, idade, cidade } = pessoa;

console.log(nome); // output: 'joão';
console.log(idade); // output: 30;
console.log(cidade); // output: 'são paulo';


// ==================== exemplo 2: renomeando ==================== //

const pessoa2 = {
  nome: 'Maria',
  idade: 25,
  cidade: 'Rio de Janeiro'
};

const { nome: nomeDaPessoa, idade: idadeDaPessoa, cidade: cidadeDaPessoa } = pessoa2;

console.log(nomeDaPessoa); // Saída: 'Maria'
console.log(idadeDaPessoa); // Saída: 25
console.log(cidadeDaPessoa);  // Saída: 'Rio de Janeiro'

// ==================== exemplo 3: cria novas variáveis e renomea ==================== //

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


// ==================== exemplo 4: cria uma nova variável usando map com apenas algumas propriedades do objeto ==================== //

const humans = [
  { nome: 'João', title: 'Engenheiro', planet: 'Marte' },
  { nome: 'Maria', title: 'Designer', planet: 'Marte' },
  { nome: 'Pedro', title: 'Programador', planet: 'Marte' }
];

const namesAndTitle = humans.map(({ nome, title }) => ({ nome, title }));

console.log(namesAndTitle);