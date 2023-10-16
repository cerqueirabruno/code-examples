/*

  $ npm init
  — cria o arquivo package.json;

  $ npm init -y
  — cria o arquivo package.json com as configurações padrões para um projeto nodejs;

  $ npm install — 

  $ npm install nome_do_pacote --save
  — adiciona à lista de dependencies;

  $ npm install nome_do_pacote --save-dev
  — adiciona à lista de devDependencies 
  
  $ npm install nome_do_pacote@2.1.0
  — instala uma versão específica;
  
  $ npm install nome_do_pacote@4.x
  — instala a última versão 4;

  $ npm install nome_do_pacote -E
  — remove a atualização automática;

  $ npm uninstall nome_do_pacote
  — remove um pacote do projeto e atualiza o arquivo package.json para refletir a remoção;
  
  $ npm list
  — lista todas as dependências instaladas no projeto;
  
  $ npm outdated
  — exibe informações sobre pacotes desatualizados em seu projeto, mostrando as versões atuais e as disponíveis;
  
  $ npm update
  — atualiza as dependências para as versões mais recentes permitidas pelo seu arquivo package.json;
  
  $ npm run nome-do-script
  — executa um script definido no seu arquivo package.json;
  
  $ npm ls
  — lista todos os pacotes instalados;

*/

/*

  "version": "1.0.0" (major, minor, patch);
  
  ^ — recebe atualização automática da minor e patch;
  ~ — recebe atualização automática do patch;

*/

/*

  devDependencies: módulos necessários apenas durante o desenvolvimento do seu projeto;
  dependencies: módulos necessários para a execução do seu aplicativo em produção;

*/

/*

  COMMONJS IMPORTAÇÃO
  const modulo = require("./meu-modulo.js");

  COMMONJS EPORTAÇÃO
  module.exports = { nome: "Exemplo" };

  ESM IMPORTAÇÃO
  import { nome } from "./meu-modulo.js";

  ESM EXPORTAÇÃO
  export const nome = "Exemplo";

*/


/*

  node_modules
  - é a pasta que guarda todos os arquivos baixados das dependências instaladas;

  package.json
  - responsável por armazenar e descrever diversas informações de um projeto, como as versões do node e do 
  npm utilizadas, a URL do repositório, a versão do projeto e as dependências de produção e de desenvolvimento;

  package-lock.json
  - é um arquivo que faz parte do ecossistema do Node.js e é usado para manter um registro explícito e
  preciso das versões exatas das dependências do seu projeto.

*/



