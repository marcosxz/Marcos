algoritmo "CalcularAreaRetangulo"

var
    largura, altura, area: real

inicio
// Seção de Comandos
    escreva("Digite o valor da largura do retângulo: ")
    leia(largura)
    escreva("Digite o valor da altura do retângulo: ")
    leia(altura)

    area := largura * altura

    escreva("A área do retângulo é: ", area:5:2)
fimalgoritmo
