
# Blogs-api

Blogs-api é um projeto onde foi necessário criar um banco de dados em SQL por meio de uma aplicação em Node.js e sequelize para realizar o CRUD de posts e validação de usuário via JasonWebToken para realizar determinadas requisições


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Ivanzmartins/ivan-martins-blogs-api.git
```

Entre no diretório do projeto

```bash
  cd ivan-martins-blogs-api
```

Instale as dependências

```bash
  docker-compose-up -d

  docker exec -it blogs_api bash
```
Dentro do terminal do container execute para iniciar o servidor
```bash
  npm start
```



## ROTAS

- /login
- /user
- /categories
- /post

