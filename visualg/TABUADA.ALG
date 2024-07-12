Algoritmo "Tabuada"

var
    numero, resultado: inteiro
    i: inteiro

Inicio
    // Passo 1: Solicitar número ao usuário
    escreva("Digite um número inteiro para ver a sua tabuada: ")
    leia(numero)

    // Passo 2: Calcular e exibir a tabuada de 1 a 10
    para i de 1 ate 10 faca
        resultado <- numero * i
        escreval(numero, " x ", i, " = ", resultado)
    fimpara

FimAlgoritmo
