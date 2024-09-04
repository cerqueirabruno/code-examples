/* 
    Operadores bitwise (ou operadores de bit) em JavaScript permitem a você realizar operações a 
    nível de bit em números inteiros. Eles operam em cada bit de um número binário de forma independente. 
    Esses operadores são úteis em várias situações, como manipulação de flags, otimização e trabalhando 
    com dados binários. Aqui estão os principais operadores bitwise em JavaScript: 
    
*/

// AND Bit a Bit (&):
const a = 5; // 00000101
const b = 3; // 00000011
const resultado = a & b; // 00000001 (1 em decimal)
console.log(resultado);

// OR Bit a Bit (|):
const a2 = 5; // 00000101
const b2 = 3; // 00000011
const resultado2 = a2 | b2; // 00000111 (7 em decimal)

// XOR Bit a Bit (^):
const a3 = 5; // 00000101
const b3 = 3; // 00000011
const resultado3 = a3 ^ b3; // 00000110 (6 em decimal)

// Deslocamento à Esquerda (<<) e à Direita (>>):
const num = 5; // 00000101
const resultado4 = num << 2; // 00010100 (20 em decimal)
const resultado5 = num >> 1; // 00000010 (2 em decimal)

// Deslocamento à Direita Não Assinado (>>>) (sem sinal):
const num2 = -5; // Representação em complemento de dois
const resultado6 = num2 >>> 1; // 2147483645 (não leva em conta o sinal)
