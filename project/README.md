# Project Frontend Intern Challenge

Desenvolvimento de uma landing page simulando um encurtador de links utilizando: 

- Angular2
- TypeScript
- Bootstrap

## Instruções para execução

No diretório do project, instale os módulos utilizando o comando npm install. Assim que eles forem instalados, é possível rodar o servidor de teste utilizando o comando ng serve e acessá-lo através do link `http://localhost:4200/`.

**NOTE: NodeJS  versão 6.9.5    NPM     versão 4.2.0**

## Estrutura dos Componentes

Seguindo os princípios de modularização do Angular2, a landing page foi organizada em diferentes componentes como é possível ver na figura a seguir. 

![componentes](https://github.com/gabrielpcosta18/frontend-intern-challenge/tree/gabriel-costa/Assets/logo-chaordic.png)

## Estrutura dos Arquivos

A estrutura de diretórios foi estabelecida com o objetivo de encapsular os componentes em seus respectivos módulos. Cada diretório do componente contém o html, scss, ts para esse componente. 

```
└── src
    └── app                        -- root              component
       └── components 
           ├── footer              -- footer            component
           ├── header              -- header            component
           ├── hits-container      -- hits-container    component
           ├── pages               -- pages             component
           ├── ranking             -- ranking           component
           ├── reducer             -- reducer           component
           └── shared              -- shared            service and class 
```

O diretório de shared possui serviços que podem ser compartilhados por diversos componentes (nesta aplicação em específico, para serviços de coleta de dados a partir do arquivo de json disponibilizado).
