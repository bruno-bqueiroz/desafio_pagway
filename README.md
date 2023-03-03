# pagway-back

Back-end for pagway

:)


## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Create a PostgreSQL database with whatever name you want
4. Configure the `.env` file using the `.env.example` file (see "Running application locally or inside docker section" for details)
5. Run all migrations

Resumido```

`npm i && npm run dev:migration:generate && npm run migration:run && npm run dev ` 

Run test:

   npm run test

```

`npm run dev:migration:generate` 

```bash
npm run migration:run
```

1. Run the back-end in a development environment:

```bash
npm run dev
```

## How to run tests

1. Follow the steps in the last section
1. Configure the `.env.test` file using the `.env.example` file (see "Running application locally or inside docker" section for details)
1. Run all migrations

```bash
npm run migration:run
```

3. Run test:
   (locally)

```bash
npm run test
```



versão simplificada

1. git clone https://github.com/bruno-bqueiroz/desafio_pagway.git

2. no arquivo .env vc configura o DATABASE_URL pra fazer a conexão com o seu banco de dados postegresql.
DATABASE_URL=postgresql://${POSTGRES_USERNAME}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DATABASE}?schema=public
 
3. npm i && npm run dev:migration:generate && npm run migration:run && npm run dev

testes

1. npm run test

rotas

1. criar um usuário

POST => http://localhost:5433/users

	body = {
  	"email": "teste@gmail.com",
  	"password": "123456"
	}

2. iniciar sessão

POST => http://localhost:5433/auth/sign-in

	body = {
  	"email": "teste@gmail.com",
  	"password": "123456"
	}
return token;

3. transaction 

POST=> http://localhost:5433/transaction
	
	HEADERS => Authorization Bearer 'token que retornou da sessao'
	
	BODY= {
  	"amount": 19,
  	"cardLatsDigits": "4444",
  	"cardName": "BRUNO BARBOSA",
  	"cardExpirationDate": "12/2024",
  	"cardCvv": "1233"
	}

return transactions

4. payable

GET  http://localhost:5433/payable
	
	HEADERS => Authorization Bearer 'token que retornou da sessao'
	
return payables
