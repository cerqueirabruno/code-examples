/* DADOS POR REFERÊNCIA */

// OBJETOS
let person = { name: "Alice", age: 25 };
let anotherPerson = person;

anotherPerson.age = 30;

console.log(person.age); // Saída: 30

// ARRAY
let numbers = [1, 2, 3];
let moreNumbers = numbers;

moreNumbers.push(4);

console.log(numbers); // Saída: [1, 2, 3, 4]
console.log(moreNumbers); // Saída: [1, 2, 3, 4]

// FUNÇÕES
function greet() {
    console.log("Hello!");
}

let sayHello = greet;

sayHello(); // Saída: "Hello!"
greet(); // Saída: "Hello!"



/* DADOS PRIMITIVOS */

// STRING
let x = 10;
let y = x;

y = 20;

console.log(x); // Saída: 10
console.log(y); // Saída: 20
