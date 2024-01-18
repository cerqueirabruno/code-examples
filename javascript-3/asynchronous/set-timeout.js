// settimeout: permite que você execute uma função repetidamente em intervalos de tempo fixos, especificados em milissegundos. é comumente usado para executar código periodicamente, como atualizar a interface do usuário, buscar dados em um servidor, ou executar animações.

settimeout(() => {
    console.log("this is the first message");
}, 5000);

settimeout(() => {
    console.log("this is the second message");
}, 3000);

settimeout(() => {
    console.log("this is the third message");
}, 1000);

