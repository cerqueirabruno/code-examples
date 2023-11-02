/*

  Você pode passar uma função como uma prop em React. Isso é útil quando você quer dar
  a um componente filho a capacidade de comunicar-se com seu componente pai.

  Aqui está um exemplo de como você pode passar uma função como uma prop:

*/

import React, { useState } from 'react';

// Componente Filho
function ChildComponent(props) {
  return <button onClick={props.greet}>Clique em mim</button>;
}

// Componente Pai
function ParentComponent() {
  const [message, setMessage] = useState('');

  const greet = () => {
    setMessage('Olá do componente filho!');
  };

  return (
    <div>
      <ChildComponent greet={greet} />
      <p>{message}</p>
    </div>
  );
}

export default ParentComponent;

/*

  GitHub Copilot
  Você pode passar uma função como uma prop em React. Isso é útil quando você quer dar
  a um componente filho a capacidade de comunicar-se com seu componente pai.

  Aqui está um exemplo de como você pode passar uma função como uma prop:

  Neste exemplo, o ParentComponent passa a função greet como uma prop para o
  ChildComponent. Quando o botão no ChildComponent é clicado, ele chama a função
  greet, que atualiza o estado do ParentComponent. Isso faz com que o ParentComponent
  re-renderize com a nova mensagem.

*/