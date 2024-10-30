/*

DOM

// REFERÊNCIA
https://www.w3schools.com/jsref/obj_window.asp

// DEFINIÇÃO
- Document Object Model (Modelo de Objeto de Documento) em inglês.
- É uma representação estruturada de um documento HTML ou XML que permite que os programas acessem e manipulem o conteúdo, estrutura e estilo do documento de forma dinâmica.
- No contexto do JavaScript, o DOM é uma interface de programação que permite que scripts interajam com elementos HTML ou XML, alterando seu conteúdo, estilo e estrutura,
bem como respondendo a eventos, como cliques de mouse e pressionamentos de tecla.

*/


// elemento topo da pirâmide
window

// HTML da página
window.document

// SELETORES (CONSULTAS DOM)
document.getElementById('id'); // retorna apenas o elemento
document.getElementsByClassName('classe'); // retorna HTMLCollection // informar o ìndice ou usar o "FOR"
document.getElementsByTagName('tag'); // retorna HTMLCollection // informar o ìndice ou usar o "FOR"
document.querySelector('seletor css'); // seletor universal // retorno: apenas 1 elemento
document.querySelectorAll('seletor css'); // seletor univeral // retorno: lista com todos elementos // retorna um NodeList


// EDITORES
.innerHTML // retorna tudo, inclusive as tags;
.innerText // retorna conteúdo de texto // ignora as tags // recarregando a página, volta ao normal;
.style // estilizar utilizando propriedades css;
.id // adicionar um id;

// PAI
.parentNode // pai (nó/elemento);
.parentElement // pai (elemento);

// FILHOS
.firstChild // primeiro filho (nó/elemento);
.lastChild // ultimo filho (nó/elemento);

.firstElementChild // primeiro filho (elemento);
.lastElementChild // último filho (elemento);

// FILHOS (TODOS)
.childNodes // retorna um NodeList com todos os nós filhos;
.children // retorna um HTMLCollection com todos os elementos filhos;

// IRMÂOS
.previousSibling // irmão anterior (nó/elemento);
.nextSibling // irmão posterior (nó/elemento);

.previousElementSibling // irmão anterior (elemento);
.nextElementSibling // irmão posterior (elemento);

// TEXTOS
.createTextNode();

// CRIAR/REMOVER ELEMENTOS
document.createElement('tag');
document.appendChild('elemento-pai');
document.removeChild('excluir-elemento');

// EVENTOS
click // click do mouse;
mouseover // 
mouseleave //
change //

// ########################################## //
// innerText vs innerHTML
let newElement1 = document.createElement('div');
let newElement2 = document.createElement('div');

newElement1.innerText = 'Um texto sem marcação HTML';
newElement2.innerHTML = '<b>Um texto com marcação HTML</b>';

// modificando elemento
document.getElementsByClassName('teste')[0].innerText = 'testando';

// modificando todos elementos
let test = document.getElementsByClassName('teste2');

for (let index = 0; index < test.length; index += 1) {
    test[index].innerText = 'testando 123...';
};

// HTMLCollection vs NodeList

// HTMLCollection contém apenas elementos de nó HTML, o NodeList pode conter qualquer tipo de nó;

// criar elementos

let arrayDeItens = ['item 1', 'item 2', 'item 3'];

let selecionaHtml = document.querySelector('.classe');

for (let index = 0; index < arrayDeItens.length; index += 1) {
    let itens = arrayDeItens[index];

    let criarLista = document.createElement('li');
    criarLista.innerText = itens;
    criarLista.className = 'itens-de-teste';

    selecionaHtml.appendChild(criarLista);
}

// removendo elemento

// .includes

// target / type

// onload
// manipulação de eventos disparados pelo DOM;
// o evento de load é acionado quando um recurso e seus recursos dependentes terminaram de carregar;

window.onload = jsCarregado;

function jsCarregado() {
    alert("página carregada!")
};

// ######

let clickP = document.getElementById('ID');

clickP.addEventListner("click", recebeClick);

function recebeClick(origem) {
    console.log(origem.target); // o  próprio elemento que originou esse evento;
    console.log(origem.type); // tipo de evento;
}