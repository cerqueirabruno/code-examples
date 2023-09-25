



















// objetos são estruturas ou coleções compostas de pares chave-valor. é possível armazenar qualquer tipo de dado, até mesmo armazenar um objeto dentro de outro ou até mesmo dentro de um array.

// acesso ao objeto
// *** dot notation (notação de ponto): car.brand;
// *** bracket notation (notação de colchetes): car['brand'].

// objeto aninhados
const account = {
    agency: '0975',
    bank: {
        cod: '012',
        id: 4,
        name: 'TrybeBank',
    },
};

console.log(account.bank); // exemplo 1
console.log(account['bank']); // exemplo 2

console.log(account.bank.name);
console.log(account['bank']['name']);

// array de objetos
const residents = [
    {
        name: 'Luíza',
        lastName: 'Guimarães',
        floor: 10,
        apartment: 1005,
    },
    {
        name: 'William',
        lastName: 'Albuquerque',
        floor: 5,
        apartment: 502,
    },
    {
        name: 'Murilo',
        lastName: 'Ferraz',
        floor: 8,
        apartment: 804,
    }
]

console.log(residents[0]); // primeiro elemento

const firstResident = residents[0]; // mais legível

firstResident.floor; // acessar a propriedade
 
const lastResident = residents[residents.length - 1]; // ultimo array

for (let index = 0; index < residents.length; index += 1) {
    const resident = residents[index];
    console.log(resident.name);
}; // log de todas pessoas

