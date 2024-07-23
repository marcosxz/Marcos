class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    cumprimentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}`)
    }
}

const pessoa1 = new Pessoa('Ana', 30, 'Engenheira');

pessoa1.cumprimentar();

const pessoa2 = new Pessoa('Carlos', 25, 'Professor')

pessoa2.cumprimentar();