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

