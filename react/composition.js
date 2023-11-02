/*

  A composição em ReactJS é um padrão fundamental que permite criar componentes mais
  complexos a partir de componentes mais simples. Em vez de herdar funcionalidades de
  um componente "pai", os componentes em React são encapsulados e podem ser facilmente
  reutilizados e combinados em novos componentes.

  Aqui está um exemplo simples de composição em React:

*/

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

/* 

  Neste exemplo, o componente App está composto por três componentes Welcome.
  Cada componente Welcome aceita uma propriedade name e renderiza uma mensagem
  de boas-vindas personalizada.

*/