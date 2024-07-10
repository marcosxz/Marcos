Algoritmo "media_valores_array"


Var

numeros: vetor[1..5] de inteiro
soma, media: real
i: inteiro

Inicio
numeros[1] <- 10
numeros[2] <- 20
numeros[3] <- 30
numeros[4] <- 40
numeros[5] <- 50

soma <- 0

para i de 1 ate 5 faca
     soma <- soma + numeros[i]
fimpara

media <- soma / 5

escreva("A média dos valores do array é: ", media)

Fimalgoritmo