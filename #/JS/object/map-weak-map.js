/* Um WeakMap em JavaScript é uma estrutura de dados que permite que você associe pares chave - valor, 
onde as chaves são objetos e os valores podem ser de qualquer tipo.A principal diferença entre um 
WeakMap e um Map(ou objeto JavaScript regular) é como ele lida com as referências aos objetos usados 
como chaves.

Aqui estão algumas características - chave do WeakMap:

Chaves fracas: Em um WeakMap, as chaves são consideradas "fracas" em relação às referências.Isso 
significa que, se não houver outras referências para um objeto usado como chave, o objeto pode ser 
coletado pelo coletor de lixo do JavaScript.Isso pode ser útil em situações em que você deseja associar 
dados a objetos temporários ou objetos que podem ser eliminados quando não são mais necessários.

Não é iterável: Diferentemente dos Maps, os WeakMaps não são iteráveis, o que significa que você não 
pode usar métodos como keys(), values(), ou entries() para percorrer os elementos de um WeakMap.Isso 
ocorre porque a coleção de chaves é mantida fraca e não pode ser facilmente acessada.

Métodos principais: Os principais métodos fornecidos por um WeakMap incluem set(key, value), get(key), 
has(key), e delete (key), que permitem adicionar, recuperar, verificar a existência e remover associações 
de chave - valor, respectivamente. */

// Criando um WeakMap
const weakMap = new WeakMap();

// Criando objetos para serem usados como chaves
const key1 = {};
const key2 = {};

// Associando valores aos objetos-chave
weakMap.set(key1, "Valor para key1");
weakMap.set(key2, "Valor para key2");

// Recuperando valores usando as chaves
console.log(weakMap.get(key1)); // "Valor para key1"
console.log(weakMap.get(key2)); // "Valor para key2"

// Verificando a existência de uma chave
console.log(weakMap.has(key1)); // true

// Removendo uma associação chave-valor
weakMap.delete(key1);

// Verificando novamente a existência da chave após a remoção
console.log(weakMap.has(key1)); // false

// Observe que o coletor de lixo pode eliminar objetos usados como chaves
// se não houver outras referências a eles.
// Em resumo, um WeakMap em JavaScript é uma estrutura de dados que permite associar dados a objetos com a capacidade de as chaves serem fracas, o que significa que objetos usados como chaves podem ser coletados pelo coletor de lixo se não houver outras referências a eles. Isso pode ser útil em determinados cenários de gerenciamento de memória e segurança.