// Função para mostrar os livros na página

// Elementos do DOM
const feebackElement = document.getElementById('feedback');
const resultsSection = document.getElementById('results');
const resultsH2 = document.getElementById('resultsH2');
const cardsElement = document.getElementById('cards');  


//Funções de feedback
function showLoading() {
    feebackElement.className = 'feedback feedback--loading'; //feedback de carregamento
    feebackElement.textContent = 'Buscando livros...'; //texto de feedback
    feebackElement.classList.remove('hidden'); //mostra o feedback
    resultsSection.classList.add('hidden'); //trata dados desatualizados
}

function showError(message) {
    feebackElement.className = 'feedback feedback--error'; //feedback de erro
    feebackElement.textContent = message; 
    feebackElement.classList.remove('hidden'); 
    resultsSection.classList.add('hidden'); 
}

function hideFeedback() {
    feebackElement.classList.add('hidden'); //adiciona a classe 'hidden' para ocultar o elemento
    feebackElement.className = 'feedback hidden'; //reseta as classes para a próxima busca
}

//Funções de renderização
function restartBooks(books, query) {
    cardsElement.innerHTML = ''; //limpa os resultados anteriores
    resultsH2.textContent = `Resultados para: "${query}"`; //atualiza o título da seção de resultados
    //Cria os cards para cada livro e adiciona na pagina
    books.forEach(book => {
        const cards = createElement(book); //cria o card para cada livro
        cardsElement.appendChild(cards); //adiciona o card
    });

    resultsSection.classList.remove('hidden'); //mostra a seção de resultados
}


function createElement(book) {
    const article = document.createElement('article');
    article.classList.add('card');
    // Verifica se o livro tem uma URL de capa e cria o HTML correspondente
    let coverHtml;
    if (book.coverUrl) {
        coverHtml = `
        <img 
        class="card-cover"
        src="${book.coverUrl}" 
        alt="Capa do livro ${book.title}"/>`;
    } else {
        coverHtml = `
        <div class="card-cover-placeholder">
        <p>Capa não disponível</p>
        </div>`;
    }
    // Monta o conteúdo do card usando template literals
    article.innerHTML = `
    ${coverHtml}
    <div class="card-body">
    <h3 class="card-title">${escapeHtml(book.title)}</h3>
    <p class="card-author">${escapeHtml(book.author)}</p>
    ${book.year ? `<span class="card-year">${escapeHtml(String(book.year))}</span>` : ''}
    </div>
    `;
    return article;
}

//Função que substitui caracteres "perigosos" por versões seguras para evitar vulnerabilidades de XSS (Cross-Site Scripting)
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, ch => map[ch]);
}