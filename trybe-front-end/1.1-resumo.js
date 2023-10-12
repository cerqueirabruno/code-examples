/*

	pasta "src": código fonte;

	pasta "dist" ou "build": código que vai pra produção;

	.gitignore ===== ignora os arquivos ou pasta que não devem ser enviados ao repositórios;

	<script type="module" src="./src/main.js"></script>
	# importações/exportações ES MODULES;

	"type": "module"
	# precisa ser informada no package.json também;

	COMMON JS ===== require / module.exports
	ES Modules ===== import / export

*/

/*

	npm init -y ===== inicia projeto nodejs e cria o package.json;

	npm install ===== instala as depêndencias;

	npm install nome-do-pacote
	npm install nome-do-pacote --save
	npm install nome-do-pacote --save-dev


*/

/*

	npx vite build
	- cria a pasta "dist" que contem o código que irá pra produção;

	npx vite --open
	- cria o dev server;

	npm create vite@latest

*/

/*

	LINTER
	npm init @eslint/config

*/