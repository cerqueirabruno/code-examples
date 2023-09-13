// incluído no ES6
// espalhar os elementos, tanto de arrays quanto de objetos, e inserir informações novas sem alterar o array ou objeto original
// sintaxe = ...

// array
const person1 = [10, 30, 50, 70]
const person2 = [20, 40, 60, 80]
const person3 = [...person1, ...person2, 900, 1000]

console.log(person3);

// objeto
const product = {
    id: 1,
    name: 'Camiseta',
};

// adiciona a chave `price` com o valor `23`
const newProduct = { ...product, price: 23 };

console.log(newProduct);