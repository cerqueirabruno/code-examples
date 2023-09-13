// promise = promessa // está esperando um retorno (exemplo: servidor externmo)
// para criar instaciamos a classe Promise
// 2 argumentos "resolve (solução)" "reject (erro)"
// para encadear mais processos utilizamos método .then
// recursos do JS (fetchAPI) e bibliotecas retornam promises

// criação de de uma promise
const myPromise = new Promise((resolve, reject) => {
    const nome = 'bruno'
    if (nome === 'bruno') {
        resolve('yes, my friend!')
    } else {
        reject('not searching')
    }

})

myPromise.then((data) => {
    console.log(data);
})

// 