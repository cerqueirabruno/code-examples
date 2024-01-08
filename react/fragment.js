/*

  Um Fragment em React é um recurso que permite agrupar uma lista de filhos sem
  adicionar nós extras ao DOM.

  Antes dos Fragments serem introduzidos, se você quisesse retornar múltiplos
  elementos de um componente, você teria que envolvê-los em um elemento de contêiner
  extra, geralmente um div. Isso pode interferir com o estilo CSS e semântica do HTML.

  Com Fragments, você pode retornar múltiplos elementos sem a necessidade de um
  elemento de contêiner. Aqui está um exemplo:

*/

import React, { Fragment } from 'react';

function Example() {
  return (
    <Fragment>
      <p>This is a paragraph.</p>
      <p>This is another paragraph.</p>
    </Fragment>
  );
}

export default Example;


// Você também pode usar a sintaxe curta para Fragments, que é apenas <> e </>:

import React from 'react';

function Example2() {
  return (
    <>
      <p>This is a paragraph.</p>
      <p>This is another paragraph.</p>
    </>
  );
}

export default Example2;

// Ambos os exemplos acima renderizam dois parágrafos sem um elemento de contêiner.