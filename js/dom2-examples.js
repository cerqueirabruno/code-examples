/* ========== ========== innerText vs innerHTML ========== ========== */

let newElement1 = document.createElement('div');
let newElement2 = document.createElement('div');

newElement1.innerText = 'Um texto sem marcação HTML';
newElement2.innerHTML = '<b>Um texto com marcação HTML</b>';

/* ========== ========== target / type ========== ========== */

/* ========== ========== onload ========== ========== */
// manipulação de eventos disparados pelo DOM;
// o evento de load é acionado quando um recurso e seus recursos dependentes terminaram de carregar;

window.onload = jsCarregado;

function jsCarregado() {
    alert("página carregada!")
};
