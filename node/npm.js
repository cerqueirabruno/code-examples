/*

NPM: gerenciador de pacotes do node js; instala, gerencia e compartilha módulos e pacotes de código javascript; 

npm init ——— cria o arquivo package.json;
npm init -y ——— cria o arquivo package.json com as configurações padrões para um projeto nodejs;

npm install ——— instala as dependências listadas no arquivo package.json (não instala dependências do devDependencies);
npm install nome_do_pacote --save ——— adiciona à lista de dependencies (módulos necessários para a execução do seu aplicativo em produção);
npm install nome_do_pacote --save-dev ——— adiciona à lista de devDependencies (módulos necessários apenas durante o desenvolvimento do seu projeto);
npm install nome_do_pacote@2.1.0 ——— instala uma versão específica;
npm install nome_do_pacote@4.x ——— instala a última versão 4;
npm install nome_do_pacote -E ——— remove a atualização automática;

npm uninstall nome_do_pacote ——— remove um pacote do projeto e atualiza o arquivo package.json para refletir a remoção;
npm list ——— lista todas as dependências instaladas no projeto;
npm outdated ——— exibe informações sobre pacotes desatualizados em seu projeto, mostrando as versões atuais e as disponíveis;
npm update ——— atualiza as dependências para as versões mais recentes permitidas pelo seu arquivo package.json;
npm run start ——— executa um script definido no seu arquivo package.json;
npm ls ——— lista todos os pacotes instalados;

^ ——— recebe atualização automática da minor e patch;
~ ——— recebe atualização automática do patch;

"version": "1.0.0" (major, minor, patch);

*/