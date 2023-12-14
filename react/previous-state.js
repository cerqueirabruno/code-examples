/*

  O "previous state" em React se refere ao estado de um componente antes de uma atualização ser aplicada.

  Quando você chama setState, o React agenda uma atualização do componente e, eventualmente, re-renderiza
  o componente com o novo estado. Durante esse processo, o "previous state" é o estado que existia antes
  da chamada setState.

  É importante notar que as atualizações de estado podem ser assíncronas em React. Isso significa que se
  você tentar ler this.state imediatamente após chamar setState, você pode não obter o novo estado, mas
  sim o estado anterior.

  Para lidar com isso, setState aceita uma função como argumento (em vez de um objeto), onde o primeiro
  argumento dessa função é o estado anterior. Aqui está um exemplo:

*/

// ========== exemplo 1 ========== //

this.setState((prevState, props) => {
  return {counter: prevState.counter + props.increment};
});

/*

  Neste exemplo, prevState é o estado anterior do componente. A função retorna um novo objeto de estado,
  que é mesclado com o estado existente.

*/


// ========== exemplo 2 ========== //

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>
        Click me
      </button>
    </div>
  );
}

export default Counter;

/*

  Neste exemplo, a função increment chama setCount com uma função. Essa função recebe o estado
  anterior (prevCount) como argumento e retorna o novo estado. Isso garante que o novo estado seja
  sempre baseado no estado mais recente, mesmo que as atualizações de estado sejam assíncronas.

*/