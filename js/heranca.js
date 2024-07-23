class Car {
    constructor(marca, modelo, ano) {
       this.marca = marca
       this.modelo = modelo
       this.ano = ano 
    }
    exibiInfo() {
        return `Carro ${this.marca} ${this.modelo} ${this.ano}`
    }
}

class EletriCar extends Car {
    constructor(marca, modelo, ano, bateria) {
        super(marca, modelo, ano);
        this.bateria = bateria
    }
    exibirBateria() {
        return `Nível da bateria: ${this.bateria} %`
    }
}

const meuCarroEletrico = new EletriCar('Tesla', 'Model S', 2022, 100);
console.log(meuCarroEletrico.exibiInfo())
console.log(meuCarroEletrico.exibirBateria())