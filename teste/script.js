function gerarNumeroAleatorio(minimo, maximo) {
    if (minimo >= maximo) {
        throw new Error('O valor mínimo deve ser menor que o valor máximo.');
    }

    const numeroAleatorio = Math.random() * (maximo - minimo) + minimo;
    return Math.floor(numeroAleatorio);
}

// Exemplo de uso
const numeroAleatorio = gerarNumeroAleatorio(1, 4);
console.log(numeroAleatorio);
