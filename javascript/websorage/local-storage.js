/* ========== ========== web storage - local storage e session storage ========== ========== */
// *** é um conjunto de objetos de armazenamento de dados do lado do cliente (navegador da pessoa);
// *** quanto tempo os dados são armazenados X se todas as abas podem acessar os dados que estão sendo armazenados;
// *** pares de chave: valor (valor sempre é uma string);
// *** diretriz de mesma origem: os dados só podem ser acessados por outras páginas no mesmo domínio;
// local storage: sem data de expiração (não é removido quando o browser é fechado);
// session storage: salva os dados apenas na sessão atual (é removido quando o browser é fechado);

localStorage.length; // tamanho;
localStorage.setItem('nome', 'bruno'); // key = 'nome' e valor = 'bruno';
localStorage.getItem('bruno'); // output: bruno;
localStorage.removeItem('nome'); // remover;
localStorage.clear(); // limpa todas as entradas salvas em localStorage;

JSON.parse(); // converte essa string de volta para o formato original;
JSON.stringify(); // transforma um dado em uma string JSON;

/* ========== ========== exemplos práticos ========== ========== */
// 1
localStorage.setItem('filme', 'madagascar'); // cria o dado;
let recuperarLocalStorage = localStorage.getItem('filme'); // seta em uma variável;
console.log(recuperarLocalStorage); // madagascar;
console.log(typeof recuperarLocalStorage); // string;

// 2 número
localStorage.setItem('numero', 10); // visivelmente é 'Number', porém por debaixo dos panos é 'string';
let recuperarNumero = JSON.parse(localStorage.getItem('numero')); // converte para o dado de origem 'Number';

// 3 objeto
let filmeFavorito = {
    filme: 'madagascar'
}

localStorage.setItem('objeto', filmeFavorito); // localStorage.setItem('objeto', JSON.strinfy(filmeFavorito)); // forma correta;
let objetoFilme = localStorage.getItem('objeto'); // let objetoFilme = JSON.prse(localStorage.getItem('objeto')); // forma correta;

/* ========== ========== @ ========== ========== */
