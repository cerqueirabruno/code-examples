// DEFINIÇÃO: é um “pedaço de código”, o qual pode ser organizado em um ou mais arquivos, que possui escopo próprio. ou seja, suas variáveis, funções, classes e afins só estão disponíveis nos arquivos que fazem parte daquele módulo, um módulo é uma funcionalidade, ou um conjunto de funcionalidades, que se encontram isoladas do restante do código. o node.js possui três tipos de módulos: internos, locais e de terceiros.

// MÓDULOS INTERNOS/CORE MODULES (NODE):
// fs: API para interagir com o sistema de arquivos de forma geral;
// url: provê utilitários para ler e manipular URLs;
// util: oferece ferramentas e funcionalidades comumente úteis a pessoas programadoras;
// os: oferece ferramentas e funcionalidades relacionadas ao sistema operacional;
// etc...

// MÓDULOS LOCAIS:
// const MeuModulo = require('./CaminhoDoArquivo');

// MÓDULOS DE TERCEIROS:
// react: biblioteca para construção de interfaces de usuário;
// express: framework para construção de aplicações web;
// next: framework para construção de aplicações web;
// etc...



// COMMONJS: Node.js

// COMMONJS (IMPORTAÇÃO)
const NovoNome = require('./CaminhoDoArquivo');

// COMMONJS (IMPORTAÇÃO EM LOTE)
const { variavel1, variavel2, variavel3 } = require('./CaminhoDoArquivo');

// COMMONJS (EXPORTAÇÃO)
module.exports = variavel1;

// COMMONJS (EXPORTAÇÃO EM LOTE)
module.exports = {
  variavel1,
  variavel2,
  variavel3,
};




// ECMASCRIPT 6 (ES6): JavaScript
// ES6 (IMPORTAÇÃO)
// 

// ES6 (EXPORTAÇÃO)
// 