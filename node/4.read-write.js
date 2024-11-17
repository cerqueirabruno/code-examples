// LEITURA: readFileSync, fs.readFile e fs.promises.readFile

// readFileSync: SINCRONO, NÃO CALLBACK E NÃO PROMISES // POR SER SINCRONO NÃO CONSEGUIMOS LER VÁRIOS ARQUIVOS.
const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

try {
  const data = fs.readFileSync(nomeDoArquivo, 'utf8'); // PARÂMETRO 1: nome do arquivo // PARÂMETRO 2 (opcional): quando é uma string, define o encoding que será utilizado durante a leitura do arquivo.
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}

// fs.readFile: ASSINCRONO
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