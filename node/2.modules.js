// DEFINIÇÃO: é um “pedaço de código”, o qual pode ser organizado em um ou mais arquivos, que possui escopo próprio. ou seja, suas variáveis, funções, classes e afins só estão disponíveis nos arquivos que fazem parte daquele módulo, um módulo é uma funcionalidade, ou um conjunto de funcionalidades, que se encontram isoladas do restante do código. o node.js possui três tipos de módulos: internos, locais e de terceiros.

// MÓDULOS INTERNOS (NODE):
// fs: API para interagir com o sistema de arquivos de forma geral;
// url: provê utilitários para ler e manipular URLs;
// util: oferece ferramentas e funcionalidades comumente úteis a pessoas programadoras;
// os: oferece ferramentas e funcionalidades relacionadas ao sistema operacional;

// MÓDULOS LOCAIS:

// MÓDULOS DE TERCEIROS:

// COMMONJS (IMPORTAÇÃO)
module.exports = variavel;

// COMMONJS (IMPORTAÇÃO)
const NovoNome = require('./CaminhoDoArquivo');

// COMMONJS (EXPORTAÇÃO EM LOTE)
module.exports = {
  variavel1,
  variavel2,
  variavel3,
};

// ES6 (IMPORTAÇÃO)
// export ...

// ES6 (EXPORTAÇÃO)
// import ...