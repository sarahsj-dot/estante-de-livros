// main.js é o arquivo que gerencia a lógica principal da aplicação, incluindo a manipulação de eventos,
// chamadas à API e controle de estado. Ele é responsável por coordenar as ações do usuário, como a busca por livros, e atualizar a interface com os resultados ou mensagens de erro.

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

//Função para lidar com o evento de busca
async function handleSearch() {
    const query = searchInput.value.trim(); // Obtém o valor do input e remove espaços em branco
    if (!query) {
        showError('Por favor, alguma informação relacionada ao livro.'); // Mostra um erro se o campo estiver vazio
        return;
    }
    showLoading(); // Mostra o feedback de carregamento 
    searchButton.disabled = true; // Desabilita o botão de busca para evitar múltiplas requisições
    searchButton.textContent = 'Buscando...'; // Atualiza o texto do botão para indicar que a busca está em andamento

    //Trata a busca e os erros
    try {
    const books = await fetchBooks(query); //chama a função para buscar os livros
    // Oculta o feedback de carregamento e exibe os resultados
    hideFeedback(); 
    restartBooks(books, query);

    //Identificar o tipo de erro e mostrar a mensagem apropriada para o usuário
} catch (error) {
    if (error.message === 'Empty'){ 
        showError('Nenhum livro encontrado para a busca: ' + query);
    }else if (error.name === 'TypeError'){ 
        showError('Erro de rede. Verifique sua conexão e tente novamente.');
    }else if (error.message.includes('status 4') || error.message.includes('status 5')) {
        showError('A API do Open Library está indisponível no momento. Por favor, tente novamente mais tarde.');
    } else {
    showError('Ocorreu um erro inesperado. Por favor, tente novamente.');
    }
} finally {
    searchButton.disabled = false; // Habilita o botão de busca novamente
    searchButton.textContent = 'Pesquisar'; // Restaura o texto do botão
    }
}

// Adiciona o evento de clique ao botão de busca
searchButton.addEventListener('click', handleSearch);
// Adiciona o evento de tecla "Enter" ao campo de busca para permitir a busca ao pressionar Enter
searchInput.addEventListener('keydown', (event) => {
    //event.key verifica qual tecla foi pressionada, e se for "Enter", chama a função handleSearch para iniciar a busca
    if (event.key === 'Enter') {
        handleSearch();
    }
});
