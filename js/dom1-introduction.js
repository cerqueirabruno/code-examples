/* ========== ========== REFERÊNCIA ========== ========== */

// https://www.w3schools.com/jsref/obj_window.asp

/* ========== ========== SELETORES (CONSULTAS DOM) ========== ========== */

document.getElementById('id'); // retorna apenas o elemento
document.getElementsByClassName('classe'); // retorna HTMLCollection // informar o ìndice ou usar o "FOR"
document.getElementsByTagName('tag'); // retorna HTMLCollection // informar o ìndice ou usar o "FOR"

document.querySelector('seletor css'); // seletor universal // apenas 1 elemento // retorna o elemento
document.querySelectorAll('seletor css'); // seletor univeral // todos elementos // retorna um NodeList


/* ========== ========== PROPRIEDADES ========== ========== */

// ### EDITORES
// .innerHTML: retorna tudo, inclusive as tags;
// .innerText: retorna conteúdo de texto // ignora as tags // recarregando a página, volta ao normal;
// .style: estilizar utilizando propriedades css;
// .id: adicionar um id;

// ### PAI
// .parentNode: pai (nó/elemento);
// .parentElement: pai (elemento);

// ### FILHOS
// .firstChild: primeiro filho (nó/elemento);
// .lastChild: ultimo filho (nó/elemento);

// .firstElementChild: primeiro filho (elemento);
// .lastElementChild: último filho (elemento);

// ### FILHOS (TODOS)
// .childNodes: retorna um NodeList com todos os nós filhos;
// .children: retorna um HTMLCollection com todos os elementos filhos;

// ### IRMÂOS
// .previousSibling: irmão anterior (nó/elemento);
// .nextSibling: irmão posterior (nó/elemento);

// .previousElementSibling: irmão anterior (elemento);
// .nextElementSibling: irmão posterior (elemento);

// ### TEXTOS
// .createTextNode();

/* ========== ========== CRIAR/REMOVER ELEMENTOS ========== ========== */

document.createElement('tag');
document.appendChild('elemento-pai');
document.removeChild('excluir-elemento');

/* ========== ========== EVENTOS ========== ========== */

// click: click do mouse;
// mouseover: 
// mouseleave:
// change:

/* ========== ========== NOTAS ========== ========== */
// evento inline = eventos adicionados diretamente no html;