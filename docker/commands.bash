# DOCKER: é uma plataforma de virtualização leve que permite criar, implantar e executar aplicações em contêineres;



##### SOBRE
# imagem
# container
# registry
# volume
# network
# criar imagem
# construção em multi-estágios

##### AJUDA
$ docker container --help



##### IMAGENS

# listar imagens docker que já estão presentes na máquina
$ docker images



##### CONTAINERS

# listar containers ativos
$ docker ps

# listar containers ativos e inativos
$ docker ps -a


# iniciar um container
$ docker container run <flags>? <imagem>:<tag> <argumentos>?


# parar um container
$ docker stop <container_id>

# parar todos os containers
$ docker stop $(docker ps -aq)


# ligar um container
$ docker start <container_id>

# ligar todos os containers
$ docker start $(docker ps -aq)


# remover um container (precisa estar parado)
$ docker rm <nome-do-container>

# remover todos os containers
$ ?


# conectar ao container
$ docker exec -it <container_id> sh

# ver logs do container
$ docker logs <container_id>

# visualizar processos
$ docker top <container_id>

# excluir todos os containers/imagens
$ docker system prune -af

# subir compose
$ docker-compose up -d

# parar/derrubar compose
$ docker-compose down

# configurar um container para iniciar automatico
$ docker update --restart=always <container_id>



##### PARAMETROS

-d # rodar em background
-p # mapear porta
-v # mapear volume
-e # passar variável de ambiente
--name # nome do container
--rm # remover container após parar
-it # interativo



##### INFORMAÇÕES DE CONTAINER
# CONTAINER ID: número hash único
# IMAGE: imagem para rodar o container
# COMMAND: comando executado ao iniciar o container
# CREATED: quando o container foi criado
# STATUS: ligado/desligado...
# PORTS: portas para se comunicar
# NAMES: nome do container


##### PARAMETROS DOCKERFILE
# FROM: imagem base
# COPY: copiar arquivos do host para o container durante a construção da imagem
# WORKDIR: diretório de trabalho
# RUN: executa comandos
# CMD: executa comandos ao iniciar o container
# ENTRYPOINT: ?
# EXPOSE: expõe uma porta








# $ docker container --help / docker container run --help


########## IMAGENS

# listar todas as imagens docker que já estão presentes na máquina;
docker images

# baixar imagem localmente (geralmente de um registry);
docker pull nome_da_imagem

# remove imagem;
docker rmi nome_da_imagem

# remover todas as imagens;
docker rmi $(docker images -q)



########## CONTAINER

- d # rodar em background
- p # mapear porta
- v # mapear volume
- e # passar variável de ambiente
- name # nome do container
- rm # remover container após parar
- it # interativo

docker exec -it nome_do_container bash # conectar ao container
docker logs nome_do_container # ver logs do container
docker restart nome_do_container # reiniciar container


# listar todos os containers (ativos);
docker ps

# listar todos os containers (ativos e inativos);
docker ps -a



# parar um container;
docker stop nome_do_container

# parar todos os containers;
docker stop $(docker ps -q)



# ligar um container;
docker start nome_do_container

# ligar todos os containers;
docker start $(docker ps -q)



# remover um container;
docker rm nome_do_container

# remover todos os containers;
docker rm $(docker ps -a -q)


# configurar um container para iniciar automatico;
docker update --restart=always nome_do_container