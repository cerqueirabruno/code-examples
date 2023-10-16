/*

    Promise é um objeto usado para processamento assíncrono. Um Promise (de “promessa”) representa um valor que pode estar disponível agora, no futuro ou nunca.

    pending (pendente): é o estado inicial dela, ou seja, ela ainda está aguardando o término da execução do código assíncrono;

    fulfilled (realizada): quando a operação assíncrona foi realizada com sucesso. Também é comum dizer que quando a promise está nesse estado ela está resolvida;

    rejected (rejeitada): quando a operação assíncrona termina com algum erro.

    new Promise((resolve, reject) => {});

    - promise.all
    # quando todas são resolvidas, retona um array com o resultado de cada uma;
    # quando apenas 1 é negada, retorna o erro;

    - promise.race
    # retorna a primeira que for resolvida ou rejeitada;

    - prommise.any
    # retorna a primeira que for resolvida apenas;
    # se nenhuma for resolvida retorna erro;

    - promise.allSettled
    #  retornará uma lista com informações relativas a todas as promessas passadas, não importando se foram resolvidas ou rejeitadas.
    
*/