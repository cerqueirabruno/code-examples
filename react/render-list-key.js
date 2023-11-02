/*

  A propriedade key é uma string especial que você precisa incluir ao criar listas de elementos em React.
  As chaves ajudam o React a identificar quais itens foram alterados, adicionados ou removidos.
  As chaves devem ser dadas aos elementos dentro do array para dar uma identidade estável aos elementos.

  Quando você não tem IDs estáveis para renderizar, você pode usar o índice do item como uma última opção.
  No entanto, isso pode ter problemas com o comportamento do componente e o desempenho da
  renderização, especialmente se a lista puder ser reordenada.

  Aqui está um exemplo de como usar a propriedade key ao renderizar uma lista:

*/

import React from 'react';

function ListComponent() {
  const items = ['Apple', 'Banana', 'Cherry'];

  return (
    <ul>
      {items.map((item, index) => 
        <li key={index}>{item}</li>
      )}
    </ul>
  );
}

export default ListComponent;

/*

  Neste exemplo, cada elemento <li> tem uma propriedade key que é igual ao seu índice no array original.
  Isso ajuda o React a identificar cada elemento de forma única.

*/