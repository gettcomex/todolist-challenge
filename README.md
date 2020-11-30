# Getting Started

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

## 1. Criando a estrutura básica do desafio

- Em caso de dúvida em alguma das etapas, a branch [guide-example](https://github.com/gettcomex/todolist-challenge/tree/guide-example) foi criada seguindo [cada etapa](https://github.com/gettcomex/todolist-challenge/commits/guide-example) descrita nesse tutorial.

### Criando o repositório

```bash
~/Projects $ mkdir todolist && cd todolist
~/Projects/todolist $ git init
```

### Definindo o [.gitignore](https://git-scm.com/docs/gitignore)

```bash
~/Projects/todolist $ npx gitignore rails node
~/Projects/todolist $ git add .gitignore
~/Projects/todolist $ git commit -m "chore(gitignore): npx gitignore rails node"
```

### Configurando o [EditorConfig](https://editorconfig.org/)

```bash
~/Projects/todolist $ curl -L https://github.com/gettcomex/todolist-challenge/raw/master/.editorconfig > .editorconfig
~/Projects/todolist $ git add .editorconfig
~/Projects/todolist $ git commit -m "chore(editorconfig): configuracoes gerais"
```

### Configurando o [ESLint](https://eslint.org/)

```bash
~/Projects/todolist $ yarn init -y
~/Projects/todolist $ yarn add -D eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
~/Projects/todolist $ curl -L https://github.com/gettcomex/todolist-challenge/raw/master/.eslintrc.js > .eslintrc.js
~/Projects/todolist $ git add .
~/Projects/todolist $ git commit -m "chore(eslint): babel-eslint+config-airbnb"
```

### Configurando o [Husky](https://github.com/typicode/husky) + [commitlint](https://github.com/marionebl/commitlint)

```bash
~/Projects/todolist $ yarn add -D husky @commitlint/{config-conventional,cli}
~/Projects/todolist $ curl -L https://github.com/gettcomex/todolist-challenge/raw/master/.commitlintrc.json > .commitlintrc.json
```

- Adicionar a configuração do Husky ao `package.json`:

```json
"husky": {
  "hooks": {
    "commit-msg": "commitlint -e $HUSKY_GIT_PARAMS"
  }
}
```

```bash
~/Projects/todolist $ git add .
~/Projects/todolist $ git commit -m "chore(husky): commit-msg+commitlint"
```

### Configurando o [lint-staged](https://github.com/okonet/lint-staged)

```bash
~/Projects/todolist $ yarn add -D lint-staged prettier
```

- Adicionar a configuração do lint-staged ao `package.json`:

```json
"lint-staged": {
  "*.(gql|css|scss|json|yml|md)": ["prettier --write", "git add"],
  "*.js": ["eslint --fix", "git add"],
  "server/{app,config,lib,spec,db/migrate}/**/*.rb": [
    "rubocop --auto-correct",
    "git add"
  ]
},
"husky": {
  "hooks": {
    "commit-msg": "commitlint -e $HUSKY_GIT_PARAMS",
    "pre-commit": "lint-staged"
  }
}
```

```bash
~/Projects/todolist $ git add .
~/Projects/todolist $ git commit -m "chore(lint-staged): prettier+eslint+rubocop"
```

### Configurando o [RuboCop](https://github.com/rubocop-hq/rubocop)

```bash
~/Projects/todolist $ curl -L https://github.com/gettcomex/todolist-challenge/raw/master/.rubocop.yml > .rubocop.yml
~/Projects/todolist $ git add .
~/Projects/todolist $ git commit -m "chore(rubocop): configuracoes gerais"
```

### Criando o `client` com [create-react-app](https://github.com/facebook/create-react-app)

```bash
~/Projects/todolist $ npx create-react-app client
```

- Definir o `.eslintrc.json` dentro da pasta `client`:

```json
{
  "extends": "../.eslintrc.js"
}
```

```bash
~/Projects/todolist $ echo 'client/src/serviceWorker.js' >> .eslintignore
~/Projects/todolist $ git add .
~/Projects/todolist $ git commit -m "feat(client): create-react-app"
```

### Criando o `server` com [rails](https://github.com/rails/rails)

```bash
~/Projects/todolist $ rails new server
~/Projects/todolist $ echo 'server/app/assets/javascripts/*.js' >> .eslintignore
~/Projects/todolist $ git add .
~/Projects/todolist $ git commit -m "feat(server): rails new"
```

A descrição do desafio, requisitos funcionais e materiais de estudos podem ser encontrados na [wiki](https://github.com/gettcomex/todolist-challenge/wiki)
