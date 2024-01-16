
/*

    simplificam o trabalho com funções assíncronas e promises em javascript;

*/

/*

    assync:
    é usada para declarar que uma função é assíncrona. funções assíncronas retornam uma promise
    automaticamente e podem conter operações assíncronas, como aguardar uma promise ser resolvida.

    await:
    é usada dentro de funções assíncronas para pausar a execução do código até que uma promise
    seja resolvida. isso permite que você escreva código assíncrono de maneira sequencial, tornando-o
    mais legível.
    
*/


async function minhafuncaoassincrona() {
    // código assíncrono aqui
}

// ======================================== //

async function exemplo() {
    const resultado = await minhafuncaoassincrona();
    console.log(resultado); // o código espera até que minhafuncaoassincrona seja concluída
}

// ======================================== //

const api_url = `...`

async function minhafuncao() {
    try {
        const response = await fetch(api_url);
        const data = response.json();
    } catch (error) {
        console.log(error);
    }
}