// Função para buscar livros na API do Open Library
async function fetchBooks(query) {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;
    const response = await fetch(url);          //faz a requisição para a API do Open Library
    if (!response.ok) throw new Error(`Error! status: ${response.status}`);    //verifica os status
    
    const data = await response.json();         //converte a resposta para JSON
    if (!data.docs || data.docs.length === 0) throw new Error('Empty');   //verifica se encontrou algum livro
    
    // Formatação dos dados antes de retornar
    return data.docs.map(book => ({
        title: book.title || 'Título desconhecido',
        author: book.author_name?.[0] || 'Desconhecido',
        year: book.first_publish_year || null,
        coverUrl: book.cover_i // URL da capa do livro
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`  // Usa o ID da capa para obter a imagem
        : (book.isbn?.[0] ? `https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`  // Tenta usar o ISBN para obter a imagem, se disponível
            : null)
    }));
}
