algoritmo "VerificarPositivo"
// Função : Verificar se um número é positivo
var
    numero: real

inicio
    escreva("Digite um número: ")
    leia(numero)

    se (numero >= 0) então
        escreva("O número é positivo.")
        senao
        escreva("O numéro é negativo.")
    fimse
fimalgoritmo
