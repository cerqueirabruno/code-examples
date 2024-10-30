/*

FUNÇÃO CONSTRUTORA:
é uma função que é usada juntamente com a palavra-chave new para criar objetos. o nome da função inicia com letra masiúscula.

*/



// exemplo 1
function Personal(name, surname) {
    this.name = name;
    this.surname = surname;
};

const personal1 = new Personal('joão', 'silva');
const personal2 = new Personal('miguel', 'ferreira');



// exemplo 2
function Car(name, year) {
    const ID = 1234567890; // propriedade privada
    const PalavraPasse = () => { }; // propriedade privada

    this.name = name; // propriedade pública
    this.year = year; // propriedade pública
    this.log = () => { // método público
        console.log(`${name}: eu sou um carro!`);
    }
};

const car1 = new Car('gol', '2000');
const car2 = new Car('palio', '1990');

car1.log(); // gol: eu sou um carro!


/*

as constantes "id" e "palavrapasse" são privadas porque são definidas dentro da função construtora "Car" sem serem atribuídas ao objeto this.
em javascript, variáveis definidas com const, let ou var dentro de uma função são acessíveis apenas dentro dessa função, tornando-as privadas.
isso significa que elas não podem ser acessadas ou modificadas diretamente de fora da função construtora.

*/