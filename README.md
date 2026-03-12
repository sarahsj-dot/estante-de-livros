# Estante de Livros

Aplicação web que busca livros na **Open Library API** usando HTML, CSS e JavaScript com programação assíncrona.

---

## Estrutura do Projeto
```
estante-de-livros/
├── index.html        <- Estrutura da página
├── css/
│   └── style.css     <- Estilização completa
├── js/
│   ├── api.js        <- Requisição à API (fetch + async/await)
│   ├── script.js     <- Manipulação do DOM (cards, feedback)
│   └── main.js       <- Lógica principal e eventos
└── README.md
```

---

## API Utilizada

**Open Library Search API**
`https://openlibrary.org/search.json` — pública e gratuita, sem necessidade de cadastro.

---

## Funcionalidades

- Busca de livros por título ou autor
- Exibição em cards com capa, título, autor e ano
- Feedback visual de carregamento durante a requisição
- Tratamento de erros: sem internet, API offline, campo vazio e sem resultados
- Interface responsiva para mobile e desktop
- Programação assíncrona com `async/await`

---

## Responsabilidade de cada arquivo JS

| Arquivo | Responsabilidade |
|---|---|
| `api.js` | Faz a requisição HTTP para a Open Library, verifica o status da resposta, converte o JSON e retorna os dados formatados |
| `script.js` | Manipula o DOM: exibe o loading, mostra erros, cria os cards dinamicamente e controla a visibilidade das seções |
| `main.js` | Orquestra o fluxo: captura os eventos de clique e Enter, chama `fetchBooks()`, repassa os dados para a UI e trata os erros com `try/catch/finally` |

---

## Tecnologias

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)


---

> Desenvolvido como atividade da **Sprint — Consumo de API**
