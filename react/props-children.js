/*

  children é uma prop especial em React que é usada para passar componentes como dados
  para outros componentes. Isso é útil para componentes genéricos que não precisam
  saber o que estão renderizando.

  Por exemplo, você pode ter um componente Card que aceita children como prop:

*/

function Card(props) {
  return <div className='card'>{props.children}</div>;
}

/*

  Então você pode usar o componente Card e passar qualquer coisa como children:

*/

<Card>
  <h2>Title</h2>
  <p>Some text</p>
</Card>

/*

  Neste exemplo, o Card renderiza o que quer que seja passado para ele. O children pode
  ser qualquer coisa que o React possa renderizar (números, strings, elementos ou uma
  array contendo esses tipos).

  É importante notar que children é apenas uma convenção. Você poderia chamar
  essa prop de qualquer coisa que quiser, mas a maioria dos desenvolvedores de
  React segue essa convenção.

*/