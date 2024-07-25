class Veiculo {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
    }
  
    exibirDetalhes() {
      alert(`Veículo: ${this.marca} ${this.modelo} ${this.ano}`);
    }
  }
  
  class Carro extends Veiculo {
    constructor(marca, modelo, ano, cor) {
      super(marca, modelo, ano); 
      this.cor = cor;
    }
  
    
    exibirDetalhes() {
      super.exibirDetalhes();
      alert(`Cor: ${this.cor}`);
    }
  }
  
  function criarCarro() {
    let marca = prompt("Digite a marca do carro:");
    let modelo = prompt("Digite o modelo do carro:");
    let ano = parseInt(prompt("Digite o ano do carro:"));
    let cor = prompt("Digite a cor do carro:");
  
    let carro = new Carro(marca, modelo, ano, cor);
  
    carro.exibirDetalhes();
  }
  