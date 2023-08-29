// guardar vários valores em uma única variável

/* ========== ========== ========== ========== ========== ========== ========== ========== ========== ==========  */

// acessar array usando índice
const shoppingList = ['Arroz', 'Batata', 'Leite Ninho', 'Sucrilhos'];
console.log(shoppingList[0]);

/* ========== ========== ========== ========== ========== ========== ========== ========== ========== ==========  */

// alterar o valor do array
shoppingList[1] = 'Suco de Cajú';

/* ========== ========== ========== ========== ========== ========== ========== ========== ========== ==========  */

// adicionar e remover
// push - add final
// pop - remove final
// unshift - add inicio
// shift - remove inicio

// exemplo
shoppingList.push('Cotonetes');

// tamanho (length)
console.log(shoppingList.length);

// verificar o ultimo elemento
console.log(shoppingList.length -1);