function sortByNewLine(input) {
  // Divide a string pelo caractere de nova linha
  const lines = input.split('\n');

  // Ordena os elementos em ordem alfabética
  const sortedLines = lines.sort((a, b) => a.localeCompare(b));

  // Junta os elementos de volta com o caractere de nova linha
  return sortedLines.join('\n');
}

// Exemplo de uso:
const inputString = `
red dead redemption
cyberpunk
astrobot
stalker2
final fantasy vii rebirth
god of war - ragnarok
elden ring - shadow of the erdtree
the last of us - parte 1
the last of us - parte 2
black myth: wukong
star wars outlaws
warhammer 40,000: space marine 2
silent hill 2
`;

const result = sortByNewLine(inputString);
console.log(result);
