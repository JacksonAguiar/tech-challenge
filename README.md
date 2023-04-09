# tech-challenge

## Tecnologias
-NODE JS/TYPESCRIPT
-REACT JS/TYPESCRIPT
-POSTGRESQL
-PRISMA
-JEST
-DOCKER E DOCKER-COMPOSE
### Pré-requisitos

Para executar a aplicação, você precisa ter instalado em sua máquina os seguintes programas:

- Docker
- Docker-compose

### Passo 1 - Clonar o repositório

Clone o repositório do projeto em sua máquina local.

### Passo 3 - Build e execução do projeto

Para iniciar a aplicação, execute o seguinte comando:

docker-compose up --build

O Docker-compose irá baixar as imagens necessárias e construir os contêineres. O comando `up` inicia a execução dos contêineres e `--build` é utilizado para garantir que os contêineres serão construídos a partir das últimas alterações no código.

### Passo 4 - Acessando a aplicação

A aplicação estará disponível no seu navegador de internet, no endereço `http://localhost:3000`. O servidor da API será executado no endereço `http://localhost:4000`.

### Passo 5 - Finalizando a execução

Para finalizar a execução da aplicação, utilize o comando abaixo:


## Tecnologias 

### - Backend

Para criação do backend, foi utilizado o Nodejs com typescript, e como ORM usei o Prisma devido sua versatilidade em abstrair a camada modelo, esse ORM permite a construção de uma aplicação escalável em pouco tempo, tudo é armazenado em um banco de dados PostgreSQL na nuvem em servidor gratuito do ElephantSQL. 

Para testes a aplicação conta com o recurso da biblioteca do Jest, e para executar basta inserir o command line:

yarn test ou npm run test

Toda essa aplicação foi construida seguindo os principios da arquitetura SOLID, e com os precedentes do clean code.
### - Frontend

Para o frontend, foi utilizado o framework ReactJS com typescript, para que fosse possivel a construção de uma aplicação escalável e com estabilidade. Foi usado o css para estilização e a biblioteca de Jest para os testes unitários.

### Docker
Para garantir uma estabilidade de excução foi construido uma configuração, docker que cuidar de processar as dependencias de execução em ambiente isolado, para melhor orquestraçao de ambos os serviços front e back, foi usado o docker-compose.
Com isso não temos mas aquele velho ditado de DEV "na minha maquina funciona...".

### link da aparesentação

https://www.loom.com/share/ee6a5297f2db41828553793226a7584a

> This is a challenge by Coodesh