class Livro {
    
    constructor(titulo, autor, isbn) {
      this.titulo = titulo;
      this.autor = autor;   
      this.isbn = isbn;    
    }
  }
  
  class Biblioteca {
    
    constructor() {
      this.livros = []; 
    }
    
    adicionarLivro(livro) {
      this.livros.push(livro); 
      console.log(`O livro "${livro.titulo}" foi adicionado à biblioteca.`);
    }
  
    listarLivros() {
      console.log('Livros na biblioteca:');
      
      this.livros.forEach(livro => {
        console.log(`${livro.titulo} - ${livro.autor}`);
      });
    }
  
    procurarLivroPorTitulo(titulo) {
      
      const livroEncontrado = this.livros.find(livro => livro.titulo === titulo);
      if (livroEncontrado) {
        console.log(`Livro encontrado: ${livroEncontrado.titulo} - ${livroEncontrado.autor}`);
      } else {
        console.log(`Livro "${titulo}" não encontrado na biblioteca.`);
      }
    }
  
    removerLivroPorTitulo(titulo) {
      
      this.livros = this.livros.filter(livro => livro.titulo !== titulo);
      console.log(`O livro "${titulo}" foi removido da biblioteca.`);
    }
  }
  
  const minhaBiblioteca = new Biblioteca();
  
  const livro1 = new Livro('Dom Quixote', 'Miguel de Cervantes', '9780199537891');
  const livro2 = new Livro('Cem Anos de Solidão', 'Gabriel Garcia Marquez', '9788535914841');
  minhaBiblioteca.adicionarLivro(livro1);
  minhaBiblioteca.adicionarLivro(livro2);
  
  minhaBiblioteca.listarLivros();
  
  minhaBiblioteca.procurarLivroPorTitulo('Dom Quixote');
  
  minhaBiblioteca.removerLivroPorTitulo('Cem Anos de Solidão');
  
  minhaBiblioteca.listarLivros();
  