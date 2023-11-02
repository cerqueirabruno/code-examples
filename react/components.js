/*

  Em React, um componente "Pai" é um componente que contém e controla outros
  componentes (componentes "Filho"). Os componentes filho são os componentes
  que estão aninhados dentro de um componente pai. Aqui está um exemplo:

*/

import React from 'react';

// Componente Filho
function ChildComponent() {
  return <p>Eu sou o componente filho.</p>;
}

// Componente Pai
function ParentComponent() {
  return (
    <div>
      <h1>Eu sou o componente pai.</h1>
      <ChildComponent />
    </div>
  );
}

export default ParentComponent;

/*

  Neste exemplo, ParentComponent é o componente pai e ChildComponent é o
  componente filho. O ParentComponent renderiza um título e o ChildComponent.
  O ChildComponent é aninhado dentro do ParentComponent, tornando-o um componente filho.

*/