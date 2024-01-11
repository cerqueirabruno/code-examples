# NODE PACKAGE MANAGER (NPM): 
# é um gerenciador de pacotes para o ambiente de execução Node.js. ele fornece duas funcionalidades principais: (1) é uma biblioteca online de pacotes JavaScript publicados por outros, que você pode baixar e usar em seus próprios projetos. (2) é uma ferramenta de linha de comando que você pode usar para instalar, atualizar, configurar e desinstalar pacotes JavaScript em seu projeto.

$ npm init # cria o arquivo package.json;
$ npm init -y # cria o arquivo package.json com as configurações padrões para um projeto node.js;

$ npm install # instala todas as dependências do projeto;
$ npm i # instala todas as dependências do projeto; (abreviação);

$ npm install nome_do_pacote --save # adiciona à lista de dependencies (módulos necessários para o funcionamento do seu projeto);
$ npm install nome_do_pacote --save-dev # adiciona à lista de devDependencies (módulos necessários apenas durante o desenvolvimento do seu projeto);
$ npm install nome_do_pacote@2.1.0 # instala uma versão específica;
$ npm install nome_do_pacote@4.x # instala a última versão 4;

$ npm uninstall nome_do_pacote # remove um pacote do projeto e atualiza o arquivo package.json para refletir a remoção;

$ npm list # listar todos os pacotes que estão atualmente instalados no seu projeto;

$ npm update # atualiza as dependências para as versões mais recentes permitidas pelo seu arquivo package.json;

$ npm outdated # exibe informações sobre pacotes desatualizados em seu projeto, mostrando as versões atuais e as disponíveis;

$ npm run nomeDoScript # executa um script definido no seu arquivo package.json;

$ npm ls # lista todos os pacotes instalados;