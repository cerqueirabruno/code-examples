/*

PARÂMETROS DE REQUISIÇÃO
- req: objeto de requisição
- res: objeto de resposta
- next: função de callback
- err: objeto de erro

TIPOS DE RESPOSTA
- res.json({ message: 'Hello World!' }); // retorna um JSON
- res.send('<h1>Hello World!</h1>'); // retorna um HTML
- res.redirect('http://www.google.com'); // redireciona para outra URL
- res.render('index.html'); // renderiza um arquivo HTML
- res.end(); // finaliza a resposta

STATUS DE RESPOSTA
- res.status(200); // status OK
- res.status(404); // status Not Found
- res.status(500); // status Internal Server Error

OBJETO DE REQUISIÇÃO
GET / HTTP/1.1 // método - protocolo - versão do protocolo
Host: developer.mozilla.org // header host
Accept: text/html // header accept - tipo de resposta que que espera do servidor

MÉTODOS HTTP (EXISTEM 39 MÉTODOS)
- GET: solicita a representação de um recurso
- POST: envia dados para serem processados por um recurso
- PUT: substitui todas as representações atuais do recurso de destino pela carga de dados da requisição
- DELETE: remove um recurso
- PATCH: aplica modificações parciais a um recurso
- OPTIONS: é usado para descrever as opções de comunicação com o recurso de destino

RESPOSTAS DO SERVIDOR
HTTP/1.1 200 OK // versão do protocolo - status - mensagem de status
Date: Sat, 09 Oct 2010 14:28:02 GMT // header date
Server: Apache // header server
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT // header last-modified
ETag: "51142bc1-7449-479b075b2891b" // header etag
Accept-Ranges: bytes // header accept-ranges
Content-Length: 29769 // header content-length
Content-Type: text/html // header content-type

<!DOCTYPE html... // corpo da resposta

ENVIAR DADOS PELA REQUISIÇÃO
- req.query: envio por consulta
- req.params: envio por URL
- req.body: envio no corpo da requisição (POST)

MIDDLEWARE
- é uma função intermediária que tem acesso tanto ao objeto de requisição (req) quanto ao objeto de resposta (res) em uma aplicação Node.js.
ele também pode ter acesso a um terceiro parâmetro, chamado de next, que é uma função que passa o controle para o próximo middleware na pilha.

- app.use(express.json())
é um middleware do Express que é usado para fazer o parsing do corpo das requisições HTTP como JSON.
basicamente, ele permite que você envie dados no formato JSON para o seu servidor node.js e os utilize no seu código sem ter que fazer o parsing manualmente.

- app.use(express.static()
é um middleware do Express que você pode usar para especificar um diretório que contenha arquivos estáticos que você deseja servir.

- morgan
é usado para fazer o logs das requisições HTTP recebidas pelo servidor.

- cors
permite que outras aplicações front-end consumam sua API.

- helmet
ajuda a proteger sua aplicação web configurando diversos headers HTTP relacionados à segurança automaticamente.

- express-rate-limit
limitar solicitações repetidas a APIs e/ou endpoints públicos.


CRUD
- Create: POST: CRIAR
- Read: GET: LER
- Update: PUT: ATUALIZAR
- Delete: DELETE: DELETAR

PROJETO DO ZERO
$ npm init -y
$ npm i express@4.17.1 --save-exact
$ npm i nodemon@2.0.15 --save-dev --save-exact

- server.js
const app = require('./app');

app.listen(3001, () => console.log('server running on port 3001'));

- app.js
const express = require('express');

const app = express();

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

module.exports = app;

- package.json
scripts
"start": "node src/server.js",
"dev": "nodemon src/server.js",
"lint": "eslint --no-inline-config --no-error-on-unmatched-pattern -c .eslintrc.json ."

main
"main": "src/server.js"

*/