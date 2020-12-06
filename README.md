# To Do List Challenge

It's a list of tasks you need to complete, or things that you want to do.

## Server Built With

- [Node](https://nodejs.org/pt-br/)
- [Express](https://expressjs.com/pt-br/)
- [PostgreSQL](https://www.postgresql.org/) + [Sequelize](https://sequelize.org/)

### Client Built With

- [React](https://pt-br.reactjs.org/)
- [Styled Components](https://styled-components.com/)

To maintain consistent code, this project uses [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) as a linter and formatter.

## Preview

![Preview](/packages/client/public/screenshot.png)

## Installation

In the root project directory, run:

```bash
yarn install
```

## Runing

1. You must create a [PostgreSQL](https://www.postgresql.org/) database.
2. Create an `.env` file with the following variables:

```
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=
```

2. In the server directory (/packages/server), run:

```bash
yarn dev
```

3. In the client directory (/packages/client), run:

```bash
yarn dev
```

4. Open [http://localhost:4000](http://localhost:4000) to view it in the browser.
