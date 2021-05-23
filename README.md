# Pet Donation - Backend

O backend de um projeto que consiste em entregar informações referentes a doação de pets.

## Iniciando o projeto

### Banco de dados

Para dropa todas tabelas, utilize:

```
yarn migrate:rollback ou npm run migrate:rollback
```

Para criar as tabelas, utilize:

```
yarn migrate:latest ou npm run migrate:latest
```

Para popular as tabelas:

```
yarn seed ou npm run seed
```

E para executar tudo em ordem, para resetar o banco de dados, utilize

```
yarn db:reset ou npm run db:reset
```

### Start

Primeiro passo é fazer o build do projeto.

```
yarn build ou npm run build
```

Tendo o primeiro build já pode ser iniciado com:

```
yarn start ou npm start
```

### Ambiente de desenvolvimento

Antes de tudo, é necessário fazer o primeiro build, então já pode ser iniciado. <br />

Para executar o build automático do TypeScript, utilize

```
yarn watch ou npm run watch
```

E para executar o auto refresh, utilize

```
yarn dev ou npm run dev
```

Caso queira utilizar os dois ao mesmo tempo

```
yarn dev:watch ou npm run dev:watch
```

## Endpoints

### Criação de usuário

- Método: POST
- URL: api/v1/user
- Corpo: JSON => { email: string, password: string, name: string, street: string, number: string, idState: number, idCity: number }
- Resposta:
  - Sucesso:
    - Status: 201
    - Mensagem: JSON => { id: number }
  - Erro:
    - Status: 403
    - Mensagem: JSON => { erro: string }

### Login

- Método: POST
- URL: api/v1/session
- Corpo: JSON => { email: string, password: string }
- Resposta:
  - Sucesso:
    - Status: 201
    - Mensagem: JSON => { id: number }
  - Erro:
    - Status: 403
    - Mensagem: JSON => { erro: string }

### Listar pets

- Método: GET
- URL: api/v1/pet-donation
- Possiveis querries:
  - city:
    - Tipo: string ou undefined
    - Uso: Para buscar pets de cidades, que começam com a string inserida
- Resposta:
  - Sucesso:
    - Status: 200
    - Mensagem: arr[JSON] => [{ petId: number, petName: string, breed: string, weight: number, cityName: string, userName: string }]
  - Erro:
    - Status: 403
    - Mensagem: JSON => { erro: string }

### Encontrar pet

- Método: GET
- URL: api/v1/pet-donation/:id
- Params: id: number
- Resposta:
  - Sucesso:
    - Status: 200
    - Mensagem: JSON => { petName: string, breed: string, weight: number, cityName: string, userName: string, email: string }
  - Erro:
    - Status: 403
    - Mensagem: JSON => { erro: string }

### Criar pet

- Método: POST
- URL: api/v1/pet-donation
- Headers:
  - authorization: 'bearer id'
- Corpo: JSON => { name: string, breed: string, weight: number, idCity: number }
- Resposta:
  - Sucesso:
    - Status: 201
    - Mensagem: JSON => { PetName: string, breed: string, weight: number, CityName: string, OwnerName: string }
  - Erro:
    - Status: 403
    - Mensagem: JSON => { erro: string }

### Atualizar pet

- Método: PUT
- URL: api/v1/pet-donation/:id
- Params
  id: number
- Headers:
  - authorization: 'bearer id'
- Corpo: JSON => { name: string, breed: string, weight: number, idCity: number }
- Resposta:
  - Sucesso:
    - Status: 200
    - Mensagem: JSON => { PetName: string, breed: string, weight: number, CityName: string, OwnerName: string }
  - Erro:
    - Status: 403
    - Mensagem: JSON => { erro: string }

### Delete pet

- Método: DELETE
- URL: api/v1/pet-donation/:id
- Params
  id: number
- Headers:
  - authorization: 'bearer id'
- Resposta:
  - Sucesso:
    - Status: 200
    - Mensagem: JSON => { message: string, id: number }
  - Erro:
    - Status: 403
    - Mensagem: JSON => { erro: string }

## Banco de dados

### STATES

Tabelas destinada para criação dos estados em geral:

| Campo | Tipo    | Chave | Limite | Relacionamento | Outros      | Descrição                |
| ----- | ------- | ----- | ------ | -------------- | ----------- | ------------------------ |
| id    | int     | PK    |        |                | Incremental | Chave primária da tabela |
| name  | varchar |       | 50     |                | NOT NULL    | Nome do estado           |
| uf    | varchar |       | 2      |                | NOT NULL    | Sigla do estado          |

### CITY

| Campo    | Tipo    | Chave | Limite | Relacionamento | Outros      | Descrição                      |
| -------- | ------- | ----- | ------ | -------------- | ----------- | ------------------------------ |
| id       | int     | PK    |        |                | Incremental | Chave primária da tabela       |
| name     | varchar |       | 50     |                | NOT NULL    | Nome da cidade                 |
| id_state | int     | FK    |        | STATES(id)     | NOT NULL    | Relação com estado pertencente |

### USERS

| Campo    | Tipo    | Chave | Limite | Relacionamento | Outros          | Descrição                   |
| -------- | ------- | ----- | ------ | -------------- | --------------- | --------------------------- |
| id       | int     | PK    |        |                | Incremental     | Chave primária da tabela    |
| email    | varchar |       | 50     |                | NOT NULL UNIQUE | Email do usuário            |
| password | string  |       | 50     |                | NOT NULL        | Senha encriptada do usuário |

### USERINFO

| Campo    | Tipo    | Chave | Limite | Relacionamento | Outros      | Descrição                       |
| -------- | ------- | ----- | ------ | -------------- | ----------- | ------------------------------- |
| id       | int     | PK    |        |                | Incremental | Chave primária da tabela        |
| name     | varchar |       | 50     |                | NOT NULL    | Nome do usuário                 |
| street   | string  |       | 50     |                | NOT NULL    | Rua do usuário                  |
| number   | string  |       | 5      |                | NOT NULL    | Número da residência do usuário |
| id_state | int     | FK    |        | STATES(id)     | NOT NULL    | Estado onde o usuário mora      |
| id_city  | int     | FK    |        | CITY(id)       | NOT NULL    | Cidade onde o usuário mora      |
| id_user  | int     | FK    |        | USERS(id)      | NOT NULL    | Referência ao usuário           |

### PETS

| Campo       | Tipo    | Chave | Limite | Relacionamento | Outros      | Descrição                |
| ----------- | ------- | ----- | ------ | -------------- | ----------- | ------------------------ |
| id          | int     | PK    |        |                | Incremental | Chave primária da tabela |
| name        | varchar |       | 50     |                | NOT NULL    | Nome do pet              |
| breed       | string  |       | 50     |                | NOT NULL    | Raça do pet              |
| uuid        | string  |       | 50     |                | NOT NULL    | Id único universal       |
| weight      | decimal |       |        |                | NOT NULL    | Peso do pet              |
| id_city     | int     | FK    |        | CITY(id)       | NOT NULL    | Cidade onde o pet está   |
| id_userInfo | int     | FK    |        | USERINFO(id)   | NOT NULL    | Referência do usuário    |

## Test

```
yarn test ou npm run test
```
