### DOCKER: é uma plataforma de virtualização leve que permite criar, implantar e executar aplicações em contêineres;
# documentação: https://docs.docker.com/
# playground: https://labs.play-with-docker.com/



### REGISTRY: é um serviço centralizado para armazenar imagens que são usadas para criar contêineres;
# exemplos free: https://hub.docker.com/, https://quay.io/,
# exemplos pagos: https://aws.amazon.com/pt/ecr/, https://cloud.google.com/artifact-registry/docs?hl=pt-br, https://azure.microsoft.com/en-us/products/container-registry/



### FUNCIONAMENTO DOS COMANDOS DOCKER (CLI)
# CLI >>> API >>> DAEMON



### AJUDA
$ docker <comando> <subcomando> <parâmetros>
$ docker --help
$ docker <comando> --help
$ docker <comando> <subcomando> --help



### IMAGENS
# listar imagens docker (que já estão presentes na máquina)
$ docker images

# remover uma imagem
$ docker rmi <nome_da_imagem>

# remover todas as imagens;
docker rmi $(docker images -q)



### CONTAINERS
# listar containers ativos
$ docker ps

# listar containers ativos e inativos
$ docker ps -a



# iniciar um container
$ docker container run <flags>? <imagem>:<tag> <argumentos>? # EX.: docker container run alpine:3.14 echo "Hello World"

# parar um container
$ docker stop <container_id>

# ligar um container parado
$ docker start <container_id>

# reiniciar um container
$ docker restart <container_id>



# remover um container inativo
$ docker rm <container_id>

# remover um container em execução
$ docker rm -f <id-do-container>

# remover todos containers inativos
$ docker container prune



# parar todos os containers em execução
$ docker stop $(docker ps -q)

# ligar todos os containers parados
$ docker start $(docker ps -q)


### PARAMETROS
--name # nome do container
--rm # remove o container após parar
-d # rodar em background (detach)
-p # mapear porta (host:container)
-P # mapear todas as portas aleatórias
-v # mapear volume
-e # passar variável de ambiente
-it # interativo



### ACESSO AO CONTAINER
# conectar ao container
$ docker exec -it <container_id> sh

# ver logs do container
$ docker logs <container_id>

# visualizar processos em execução
$ ps aux

# visualizar processos do container (não inclui serviços que são compartilhados com o sistema hospedeiro)
$ docker top <container_id>

# sair do container
$ exit



### OUTROS
# excluir todas as imagens e containers
$ docker system prune -af

# configurar um container para iniciar automatico
$ docker update --restart=always <container_id>



### INFO CONTAINEIRES
# CONTAINER ID: número hash único
# IMAGE: imagem para rodar o container
# COMMAND: comando executado ao iniciar o container
# CREATED: quando o container foi criado
# STATUS: ligado/desligado...
# PORTS: portas para se comunicar
# NAMES: nome do container



### CRIAÇÃO DE IMAGENS
$ docker build <flags> -t <nome-da-imagem> <contexto> # -t: nome da imagem / contexto: caminho de pasta para processar o arquivo Dockerfile

##### DOCKERFILE
# FROM: especificar a imagem base a ser utilizada para criar uma nova imagem
# WORKDIR: defini o diretório de trabalho dentro do contêiner. todas as instruções subsequentes no Dockerfile, como RUN, CMD, ENTRYPOINT, COPY e ADD, serão executadas nesse diretório.
# COPY: copiar arquivos ou diretórios do sistema de arquivos local (host) para dentro do sistema de arquivos do contêiner durante o processo de criação de uma imagem Docker.
# ADD: semelhante ao "COPY", porém além de copiar, pode descompactar arquivos .tar automaticamente e aceita urls remotas.
# EXPOSE: indica que a imagem poderá receber conexões pelo número da porta que for informado.
# ENV: define variáveis de ambiente que serão utilizadas durante o processo de build.

# RUN: indica que o comando à frente deve ser executado imediatamente, durante o processo de build. é muito comum utilizar o RUN para fazer instalações de dependências.
# CMD: o comando à frente deve ser executado imediatamente, durante o processo de build. é como dizer ao Docker: "Execute este comando por padrão, a menos que outro comando seja especificado na execução do contêiner."
# ENTRYPOINT: indica para o Docker qual comando deve ser executado ao iniciar o container.


### OBS.:
# CMD = COMANDO DEFAULT, É SUBTITUIDO POR OUTRO COMANDO NA EXECUÇÃO
# ENTRYPOINT = COMANDO FIXO, CONCATENA AO PASSAR OUTRO COMANDO COMO PARÂMETRO NA EXECUÇÃO DA IMAGEM