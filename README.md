Estante de Livros
Aplicação web que busca livros na Open Library API usando HTML, CSS e JavaScript com programação assíncrona.

Estrutura do Projeto
estante-de-livros/
├── index.html        <- Estrutura da página
├── css/
│   └── style.css     <- Estilização completa
├── js/
│   ├── api.js        <- Requisição à API (fetch + async/await)
│   ├── script.js     <- Manipulação do DOM (cards, feedback)
│   └── main.js       <- Lógica principal e eventos
└── README.md




API Utilizada

Open Library Search API https://openlibrary.org/search.json


Funcionalidades

Busca de livros por título ou autor
Exibição em cards com capa, título, autor e ano
Programação assíncrona com async/await
Tratamento de erros: sem internet, API offline, campo vazio e sem resultados
Interface responsiva 
Feedback visual de carregamento durante a requisição


Responsabilidade de cada arquivo JS

api.js - Faz a requisição HTTP para a Open Library, verifica o status da resposta, converte o JSON e retorna os dados formatados.

script.js - Manipula o DOM: exibe o loading, mostra erros, cria os cards dinamicamente e controla a visibilidade das seções.

main.js - Orquestra o fluxo: captura os eventos de clique e Enter, chama fetchBooks(), repassa os dados para a UI e trata os erros com try/catch/finally.

Tecnologias

HTML5
CSS
JavaScript (fetch, async/await, DOM API)



Desenvolvido como atividade da Sprint - Consumo de API 