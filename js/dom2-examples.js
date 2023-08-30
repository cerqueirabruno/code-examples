/* ========== ========== innerText vs innerHTML ========== ========== */

let newElement1 = document.createElement('div');
let newElement2 = document.createElement('div');

newElement1.innerText = 'Um texto sem marcação HTML';
newElement2.innerHTML = '<b>Um texto com marcação HTML</b>';

/* ========== ========== modificando 1 elemento ========== ========== */

document.getElementsByClassName('teste')[0].innerText = 'testando';

/* ========== ========== modificando todos elementos ========== ========== */

let test = document.getElementsByClassName('teste2');

for (let index = 0; index < test.length; index += 1) {
    test[index].innerText = 'testando 123...';
};

/* ========== ========== HTMLCollection vs NodeList ========== ========== */

// HTMLCollection contém apenas elementos de nó HTML, o NodeList pode conter qualquer tipo de nó;

/* ========== ========== criar elementos ========== ========== */

let arrayDeItens = ['item 1', 'item 2', 'item 3'];

let selecionaHtml = document.querySelector('.classe');

for (let index = 0; index < arrayDeItens.length; index += 1) {
    let itens = arrayDeItens[index];

    let criarLista = document.createElement('li');
    criarLista.innerText = itens;
    criarLista.className = 'itens-de-teste'

    selecionaHtml.appendChild(criarLista);
}

/* ========== ========== removendo elemento ========== ========== */

/* .includes */

/* ========== ========== target / type ========== ========== */

/* ========== ========== onload ========== ========== */
// manipulação de eventos disparados pelo DOM;
// o evento de load é acionado quando um recurso e seus recursos dependentes terminaram de carregar;

window.onload = jsCarregado;

function jsCarregado() {
    alert("página carregada!")
};

/* ========== ========== @@@ ========== ========== */
