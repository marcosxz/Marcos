class Person {
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
    ehMaoirDeIdade() {
        return this.idade >= 18 ? `${this.nome} é maior de idade.` : `${this.nome} não é maior de idade.`
    }
}

const pessoa1 = new Person('Ana', 20);
const pessoa2 = new Person('Carlos', 16);
console.log(pessoa1.ehMaoirDeIdade());
console.log(pessoa2.ehMaoirDeIdade());