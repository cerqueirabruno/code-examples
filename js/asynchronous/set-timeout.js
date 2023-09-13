// setTimeout: permite que você execute uma função repetidamente em intervalos de tempo fixos, especificados em milissegundos. É comumente usado para executar código periodicamente, como atualizar a interface do usuário, buscar dados em um servidor, ou executar animações.

setTimeout(() => {
    console.log("this is the first message");
}, 5000);

setTimeout(() => {
    console.log("this is the second message");
}, 3000);

setTimeout(() => {
    console.log("this is the third message");
}, 1000);

