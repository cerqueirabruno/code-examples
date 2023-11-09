/*

  O useState é um Hook em React que permite adicionar estado local a componentes funcionais.
  Antes dos Hooks, apenas componentes de classe podiam ter estado local.

  O useState retorna um par de valores: o estado atual e uma função que atualiza esse estado.
  Quando a função de atualização é chamada, o componente re-renderiza com o novo estado.

  Aqui está um exemplo simples de como o useState pode ser usado:

*/

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;

/*

  Neste exemplo, useState é chamado com o valor inicial de 0.
  Ele retorna um par de valores, ao qual damos os nomes count e setCount.
  count é equivalente a this.state.count em um componente de classe, e
  setCount é equivalente a this.setState({ count: x }).

*/