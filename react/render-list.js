/*

  Para renderizar uma lista em ReactJS, você pode usar o método map() de JavaScript 
  em um array de dados. Cada item do array será passado para uma função de renderização
  que retorna um elemento JSX. Aqui está um exemplo:

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

  Neste exemplo, items é um array de strings. A função map() é chamada em items, e para 
  cada item no array, uma função é chamada que retorna um elemento <li> contendo o item.
  O atributo key é necessário para ajudar o React a identificar quais itens foram alterados,
  adicionados ou removidos.

*/