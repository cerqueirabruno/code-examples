# NODE PACKAGE MANAGER (NPM)
# é um gerenciador de pacotes para o ambiente de execução Node.js.



# iniciar um projeto npm
npm init

# iniciar um projeto npm com valores padrão
npm init -y

# instalar todas as dependências de um projeto
npm install

npm i

# instalar um pacote
npm install package-name

npm i package-name

# instalar um pacote como dependência de produção
npm install package-name --save

# instalar um pacote como dependência de desenvolvimento (módulos durante o desenvolvimento)
npm install package-name --save-dev

# instalar um pacote com a versão exata
npm install package-name@1.0.0

# instalar um pacote com a versão mais recente especificada
npm install package-name@4.x

# desinstalar um pacote
npm uninstall package-name

# listar todas as dependências de um projeto
npm list

# atualizar todos os pacotes
npm update

# atualizar um pacote
npm update package-name

# executar um script definido no package.json
npm run script-name