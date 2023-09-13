// atribuição via desestruturação (destructuring assignment): é uma expressão javascript que possibilita extrair dados de arrays ou objetos em variáveis distintas.
// exemplo 1 (com array)

const numeros = [1000, 2000, 3000, 4000, 5, 6, 7, 8, 9, 0];
const [primeiroNumero, segundoNumero] = numeros;

console.log(primeiroNumero); // output: 1000
console.log(segundoNumero); // output: 2000

// exemplo 2 (com array)

const numeros = [1000, 2000, 3000, 4000, 5, 6, 7, 8, 9, 0];
const [primeiroNumero, segundoNumero, ...resto] = numeros;

console.log(primeiroNumero);  // output: 1000
console.log(segundoNumero); // output: 2000
console.log(resto); // output: [ 3000, 4000, 5, 6, 7, 8, 9, 0 ]

// exemplo 3 (com array)

let numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(numeros[1][2]); // output: 6

// exemplo 4 (com objeto)

const eu = {
    nome: 'Bruno',
    sobrenome: 'Cerqueira',
    idade: 26,
    endereço: {
        rua: 'Rua Santo Onofre',
        numero: 22
    }
};

const { nome, sobrenome } = eu;
console.log(nome); // output: Bruno
console.log(sobrenome); // output: Cerqueira

const { nome = 'Lorraine' } = eu;
console.log(nome); // output: Bruno
console.log(nome === 'Bruno'); // output: true

const { nome: teste } = eu;
console.log(teste); // output: Bruno