// https://www.w3schools.com/jsref/obj_window.asp

// window.document
// window.alert

// seletores
getElementById('id'); // nenhum retorno (apenas no console)
getElementsByClassName('classe'); // retorna HTMLCollection // informar o ìndice ou usar o "FOR"
getElementsByTagName('tag'); // retorna HTMLCollection // informar o ìndice ou usar o "FOR"

querySelector('seletor css'); // seletor universal // apenas 1 elemento // retorna o elemento
querySelectorAll('seletor css'); // seletor univeral // todos elementos // retorna um NodeList


// seletores - sintaxe
let qs1 = document.querySelector('.classe');
let qs2 = document.querySelector('#id');
let qs3 = document.querySelector('p');
let qs4 = document.querySelector('.classe-pai .classe-filho')

let qsa1 = document.querySelectorAll('.classe');
let qsa2 = document.querySelectorAll('.classe')[0].innerText = 'teste';
let qsa3 = document.querySelectorAll('.classe-pai .classe-filho');


// editores
// .innerHTML: retorna tudo, inclusive as tags
// .innerText: retorna conteúdo de texto // ignora as tags // recarregando a página, volta ao normal
// .style: estilo
