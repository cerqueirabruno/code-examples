/*

// REGRAS DAS VARIÁVEIS
- proibido palavras reservadas
- precisa de um nome significativo
- não pode começar com número
- não pode conter espaços ou traços
- case-sensitive (letras maiúsculas e minúsculas fazem diferença)
- não pode ser redeclarada (let nome = 'João'; let nome = 'Maria';)
- const não pode ser reatribuída (const nome = 'João'; nome = 'Maria';)
- não utilize var, utilize let ou const

*/

let nome = 'João'; // declarando variável
let idade; // declarando variável sem atribuir valor
idade = 20; // atribuindo valor a variável
console.log(nome, idade); // imprimi no console
console.log(`${nome} tem ${idade} anos.`); // template literals
console.log(typeof(nome));; // tipo da variável (string)

/*

comentário de bloco

*/

// comentário de uma linha