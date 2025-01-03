// LER ARQUIVOS // ESCREVER ARQUIVOS // ADICIONAR DADOS EM ARQUIVOS

// LEITURA DE ARQUIVO:
// fs.readFileSync: sincrono, não usa callback nem promises.
// fs.readFile: assincrono, usa callback.
// fs.promises.readFile: assincrono, usa promises.




// PARÂMETRO 1 (obrigatório) : nome do arquivo.
// PARÂMETRO 2 (opcional): quando é uma string, define o encoding que será utilizado durante a leitura do arquivo.
const fs = require('fs');

try {
  const data = fs.readFileSync('meu-arquivo.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}



// LEITURA DE ARQUIVO: readFile:
// ASSINCRONO
const fs = require('fs').promises;

async function main() {
  try {
    const data = await fs.readFile('./meu-arquivo.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

main()




// ESCREVER: writeFile
const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão'); // pode receber o 3 parâmetro, 
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main()