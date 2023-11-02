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