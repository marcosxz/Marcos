class Produto {
    constructor(nome, preco, quantidade) {
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }
  
    calcularValorTotal() {
      return this.preco * this.quantidade;
    }
  }
  
  let produtos = [];
  
  function adicionarProduto() {
    let nome = prompt("Digite o nome do produto:");
    let preco = parseFloat(prompt("Digite o preço do produto:"));
    let quantidade = parseInt(prompt("Digite a quantidade em estoque:"));
    
    let produto = new Produto(nome, preco, quantidade);
   
    produtos.push(produto);
  
    alert(`Produto ${nome} adicionado com sucesso!`);
  }
  
  function exibirTotalEstoque() {
    let total = 0;
    
    for (let produto of produtos) {
      total += produto.calcularValorTotal();
    }
  
    alert(`Valor total em estoque: R$ ${total.toFixed(2)}`);
  }