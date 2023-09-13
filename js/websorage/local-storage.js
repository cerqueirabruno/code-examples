/* ========== ========== cookies ========== ========== */
// *** são dados em pequenos arquivos de texto, os quais ficam salvos no computador de uma pessoa quando ela utiliza a internet;
// *** envia os dados para o servidor junto com a requisição;
// *** servidor tem acesso ao dados da pessoa usuária;
// chave e valor;
// application > storage > cookies;
// window.document.cookie (criar, ler e deletar cookies);
// cookie é deletado ao fechar o navegador ou adicionar data de expiração;

// 1: cookie;
document.cookie = 'email=teste@hotmail.com';

// 2: cookie com data de expiração;
document.cookie = 'email=teste@hotmail.com; expires=Thu, 17 Dec 2020 12:00:00 UTC';

// 3: cookie com path (caminho ao qual pertence);
document.cookie = 'email=teste@hotmail.com; expires=Thu, 17 Dec 2020 12:00:00 UTC; path=/';

// 4: cookie dentro de variável;
const meuCookie = 'email=teste@hotmail.com' 

// 5: alterar o cookie;
document.cookie = 'email=testenovo123@hotmail.com';

// 6: deletar (alterando a data de expiração);
document.cookie = 'email=; expires=Tue, 01 Dec 2020 12:00:00 UTC;'

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
