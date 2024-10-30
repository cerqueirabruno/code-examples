# DOCKER
# 




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