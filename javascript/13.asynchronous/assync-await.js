
/*

    simplificam o trabalho com funções assíncronas e Promises em JavaScript;

*/

/*

    assync:
    é usada para declarar que uma função é assíncrona. funções assíncronas retornam uma Promise
    automaticamente e podem conter operações assíncronas, como aguardar uma Promise ser resolvida.

    await:
    é usada dentro de funções assíncronas para pausar a execução do código até que uma Promise
    seja resolvida. Isso permite que você escreva código assíncrono de maneira sequencial, tornando-o
    mais legível.
    
*/


async function minhaFuncaoAssincrona() {
    // Código assíncrono aqui
}

// ======================================== //

async function exemplo() {
    const resultado = await minhaFuncaoAssincrona();
    console.log(resultado); // O código espera até que minhaFuncaoAssincrona seja concluída
}

// ======================================== //

const API_URL = `...`

async function minhaFuncao() {
    try {
        const response = await fetch(API_URL);
        const data = response.json();
    } catch (error) {
        console.log(error);
    }
}