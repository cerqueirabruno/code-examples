/*

INSTANCEOF

operador utilizado para verificar se um objeto foi criado por uma determinada função construtora ou herda de seu protótipo, ou seja,
se ele é uma instância de uma classe específica.
retorna true se o objeto for uma instância da função construtora ou de uma classe, caso contrário, retorna false.

*/


// sintaxe
// objeto instanceof FunçãoConstrutora


// exemplo 1:
class Animal {}

class Dog extends Animal {}

const myDog = new Dog();

console.log(myDog instanceof Dog); // true, pois myDog é uma instância de Dog
console.log(myDog instanceof Animal); // true, pois Dog herda de Animal
console.log(myDog instanceof Object); // true, pois todos os objetos em JavaScript herdam de Object
console.log(myDog instanceof Array); // false, pois myDog não é uma instância de Array
