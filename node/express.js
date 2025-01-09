// PROTOCOLO HTTP

/*
http://localhost:3001/produtos
protocolo + domínio + porta/rota
*/

// >>> ANATOMIA REQUISIÇÃO E RESPOSTA
// LINHAS INICIAIS (MÉTODO HTTP OU STATUS CODE)
// LINHA DE CABEÇALHO
// CORPO DA MENSAGEM

// >>> MÉTODOS HTTP (CRUD) (EXISTEM 39 MÉTODOS)
GET // OBTER (READ)
POST // CRIAR (CREATE)
PUT // ATUALIZAR COMPLETA (UPDATE)
PATCH // ATUALIZAR PARCIAL (UPDATE)
DELETE // APAGAR (DELETE)

// >>> STATUS DE RESPOSTA
res.status(100); // resposta de informação
res.status(200); // resposta de sucessos
  res.status(201); // resposta de criação
res.status(300); // resposta de redirecionamento
res.status(400); // resposta de erro do cliente (bad request)
  res.status(404); // not found
res.status(500); // resposta de erro do servidor

/*
>>> CORPO DE UMA REQUISIÇÃO
- GET / HTTP/1.1 **** método HTTP + rota + protocolo + versão do protocolo ****
- Host: developer.mozilla.org **** header host: endereço do servidor ****
- Accept: text/html **** header accept: tipo de resposta a qual esperamos do servidor ****

>>> CORPO DE UMA RESPOSTA
- HTTP/1.1 200 OK **** versão do protocolo + status + mensagem de status ****
- Date: Sat, 09 Oct 2010 14:28:02 GMT **** header date ****
- Server: Apache **** header server ****
- Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT **** header last-modified ****
- ETag: "51142bc1-7449-479b075b2891b" **** header etag ****
- Accept-Ranges: bytes **** header accept-ranges ****
- Content-Length: 29769 **** header content-length ****
- Content-Type: text/html **** header content-type ****
- <!DOCTYPE html... **** corpo da resposta (pode enviar dados, porém é opcional) ****
*/

// EXPRESS

// >>> PARÂMETROS
req // objeto de requisição
res // objeto de resposta
next // função de callback
err // objeto de erro

// >>> TIPOS DE RESPOSTA
res.json({ message: 'Hello World!' }); // retorna um JSON
res.send('<h1>Hello World!</h1>'); // retorna um HTML
res.redirect('http://www.google.com'); // redireciona para outra URL
res.render('index.html'); // renderiza um arquivo HTML
res.end(); // finaliza a resposta

// >>> ENVIAR DADOS PELA REQUISIÇÃO
req.query // envio por query string (valor1=1&valor2=2)
req.params // envio por url (https://www.kabum.com.br/produto/117767/)
req.body // envio no corpo da requisição (POST)

// >>> MIDDLEWARES
app.use(express.json()); // permite que você envie dados no formato json para o seu servidor node.js e os utilize no seu código sem ter que fazer o parsing manualmente.
app.use(express.static('./images')); // é um middleware do Express que você pode usar para especificar um diretório que contenha arquivos estáticos que você deseja servir.
// morgan: é usado para fazer o logs das requisições HTTP recebidas pelo servidor.
// cors: permite que outras aplicações front-end consumam sua API.
// helmet: ajuda a proteger sua aplicação web configurando diversos headers HTTP relacionados à segurança automaticamente.
// express-rate-limit: limitar solicitações repetidas a APIs e/ou endpoints públicos.