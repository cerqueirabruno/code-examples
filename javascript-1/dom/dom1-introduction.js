/* ========== ========== REFERÊNCIA ========== ========== */

// https://www.w3schools.com/jsref/obj_window.asp

/* ========== ========== DEFINIÇÃO ========== ========== */

// Document Object Model (Modelo de Objeto de Documento) em inglês. É uma representação estruturada de um documento HTML ou XML que permite que os programas acessem e manipulem o conteúdo, estrutura e estilo do documento de forma dinâmica. No contexto do JavaScript, o DOM é uma interface de programação que permite que scripts interajam com elementos HTML ou XML, alterando seu conteúdo, estilo e estrutura, bem como respondendo a eventos, como cliques de mouse e pressionamentos de tecla.

window // é o elemento "topo da pirâmide" na árvore do DOM;
window.document // é o HTML da página;

/* ========== ========== SELETORES (CONSULTAS DOM) ========== ========== */

document.getElementById('id'); // retorna apenas o elemento
document.getElementsByClassName('classe'); // retorna HTMLCollection // informar o ìndice ou usar o "FOR"
document.getElementsByTagName('tag'); // retorna HTMLCollection // informar o ìndice ou usar o "FOR"

document.querySelector('seletor css'); // seletor universal // retorno: apenas 1 elemento // retorna o elemento
document.querySelectorAll('seletor css'); // seletor univeral // retorno: lista com todos elementos // retorna um NodeList


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