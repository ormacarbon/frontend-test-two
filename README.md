![CloudFlare Pages Orma Carbon](https://img.shields.io/endpoint?url=https://cloudflare-pages-badges.laravieira.workers.dev/?projectName=ormacarbon-challenge)

# Orma Carbon Challenge
Check it out at [https://ormacarbon.laravieira.me/](https://ormacarbon.laravieira.me/).

The idea of this project is a radio list, with the ability to:
- Browser online stations
- See details of each online stations
- Save your favorites station on browser
- Listen to the stations

### What was requested
- [x] Dedicated branch for project idea
- [x] Used [radio-browser-api](https://github.com/ivandotv/radio-browser-api) API listed on [public-apis](https://github.com/public-apis/public-apis)
- [x] Used Next.js features
- [x] Used styled components with [MUI Kit](https://mui.com/)
- [x] Page fully responvise
- [x] Persistent dark/light mode, default per system, overwrite switch.
- [x] Use of states with `useState` hook
- [x] Use of contexts with `createContext` and `useContext` hooks
- [x] Multiple pages (home, favorites, dynamic details)
- [x] Navbar with links and pagination for navigation
- [x] API with listing pagination with 15 itens per page
- [x] Project completely made in English
- [x] Project deployed (done with [Cloudflare Pages](https://pages.cloudflare.com/))

### How to run locally
```shell
npm run dev
```

# **TESTE DE FRONTEND**

Neste teste, você será livre para criar uma aplicação consumindo a API que você quiser e com o tema que desejar.
Contudo, o seu projeto deverá seguir os requisitos mínimos de conteúdo.

SUGESTÕES DE APIS:
https://github.com/public-apis/public-apis

---------------------------------------------------------------------
## REQUISITOS:

- SEJA ORIGINAL, PROJETOS SUSPEITOS DE SEREM COPIADOS SERÃO DESCARTADOS!
- QUEREMOS VER O SEU CÓDIGO, E NÃO O DE OUTROS.

## GIT
- Faça um fork deste repositório.
- Criar uma branch para codar as suas features.
- Criar um pull-request quando o teste for finalizado e submetido.

##### **NOTA: Será avaliado também se o nome da branch, títulos de commit, push e comentários possuem boa legibilidade.**

-----------------------------------------------------

## FRAMEWORK

- Utilizar as ferramentas presentes no framework do projeto (NEXT.JS).

-----------------------------------------------------

## ESTILOS

- Os estilos deste teste devem ser feitos em styled-components (evite utilizar bootstrap, mas se necessário, use).
- O projeto deverá conter tema claro/escuro e forma do usuário alterar entre os dois.
- Deve ser totalmente responsivo.

-----------------------------------------------------

## PROJETO

- Deve utilizar useContext, useState e useEffect.
- Ter ao menos 3 paginas navegáveis com router (ex: um navbar para facilitar a navegação).
- Deve consumir uma API de sua escolha, desde que os dados sejam filtraveis e paginados. No mínimo 15 itens por requisição.

-------------------------------------------------------

## REQUISITOS DIFERENCIAIS:

- Código tentando seguir SOLID.
- Código performático.
- Utilizar inglês no projeto todo.
- Utilizar Injeção de Dependências.
- Fazer deploy do mesmo (heroku, netlify, aws, vercel, github pages ou outro da preferência).
