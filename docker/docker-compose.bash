version: '3' # versão do docker-compose
services: # serviços que serão executados
  frontend: # nome do serviço
    build: frontend/ # diretório onde está o Dockerfile
    restart: on-failure # política de reinicialização
    ports: # mapeamento de portas
      - 3000:3000 # porta do host:porta do container
    depends_on:
      - backend
    volumes:
      - ./frontend/src:/frontend/src
    networks:
      - rede-virtual-1
  backend:
    build: backend/
    restart: on-failure
    ports:
      - 3001:3001
    environment:
      - DB_HOST=database
    depends_on:
      - database
    networks:
      - rede-virtual-1
      - rede-virtual-2
  database:
    image: betrybe/docker-compose-example-database:v1 # imagem do container
    restart: always
    networks:
      - rede-virtual-2
volumes:
  dados-do-banco:
networks:
  rede-virtual-1:
  rede-virtual-2:



### RESTART
# no: o container não reiniciará automaticamente (padrão).
# on-failure: o container será reiniciado caso ocorra alguma falha apontada pelo "exit code", diferente de zero.
# always: sempre que o serviço parar, seja por um falha ou porque ele simplesmente finalizou sua execução, ele deverá ser reiniciado.
# unless-stopped: o container sempre será reiniciado, a menos que utilizemos o comando docker stop <container> manualmente.



### SUBIR COMPOSE
$ docker-compose up -d

### SUBIR COMPOSE E RECONSTRUIR IMAGENS
$ docker-compose up -d --build

### SUBIR COMPOSE COM APENAS UM SERVIÇO
$ docker-compose up -d <nome-do-serviço>

### PARAR COMPOSE 
$ docker-compose down

### INFORMAÇÕES DE CONTAINERS (NOME COMPLETO, SAÚDE E PORTAS MAPPADAS)
$ docker-compose ps

### LOGS DE UM CONTAINER
$ docker-compose logs <nome-do-serviço>

### RÉPLICAS DE UM SERVIÇO
$ docker-compose up --scale service=<número-de-replicas>



### ORQUESTRAÇÃO DE CONTAINERS
# Kubernetes: projeto de código aberto de orquestração de containers, mantido pela CNCF.
# OpenShift: projeto de código aberto de orquestração de containers, mantido pela Red Hat.
# Docker Swarm: projeto da empresa Docker Inc. para orquestrar containers.
# AWS Elastic Container Service : serviço pago da Amazon para orquestrar containers.