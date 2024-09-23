# API de Filmes Nacionais

A **API de Filmes Nacionais** é uma aplicação desenvolvida com Node.js e Express, destinada a gerenciar uma coleção de filmes brasileiros. Este projeto foi desenvolvido como parte do mini projeto do M4 do curso "Programadores do Amanhã", com o objetivo de incentivar o acesso à cultura e ao cinema nacional.

## Contexto

Conforme a Constituição Federal, o acesso ao lazer e à cultura é um direito do cidadão. Em 2018, o Exame Nacional do Ensino Médio abordou a temática "Democratização do acesso ao cinema no Brasil", evidenciando a necessidade de discutir a efetividade das legislações existentes e os desafios que ainda persistem, especialmente em relação à desigualdade social.

A democratização do cinema é essencial não apenas como forma de entretenimento, mas também como estratégia de educação e ferramenta de transformação social. Projetos como o Cinema de Rua têm mostrado que é possível levar filmes às comunidades, promovendo o consumo do cinema nacional de forma acessível.

## Tecnologias Utilizadas

- **Node.js**: 14.x
- **Express**: 4.x
- **Nodemon**: Para reinicialização automática do servidor durante o desenvolvimento
- **Cors**: Para habilitar CORS (Cross-Origin Resource Sharing)
- **Body-Parser**: Para interpretar requisições com corpo em JSON

## Passo a Passo para Execução do Projeto

### 1. Clone o repositório

git clone https://github.com/dborahfagundes/FilmesNacionais.git

### 2. Instale as dependências
```
npm install
```

## 3. Execute a API
```
npm start
```
A API deve estar rodando em http://localhost:3000/api/filmes.

## 4. Teste os endpoints
Você pode utilizar ferramentas como Postman ou Insomnia para testar os seguintes endpoints:

```
GET /api/filmes - Lista todos os filmes
POST /api/filmes - Adiciona um novo filme
PUT /api/filmes/:id - Atualiza um filme existente
DELETE /api/filmes/:id - Remove um filme
```

## Contribuição
Sinta-se à vontade para contribuir com melhorias ou novas funcionalidades. Crie uma nova branch para suas alterações e envie um pull request.
Espero que goste! <3
