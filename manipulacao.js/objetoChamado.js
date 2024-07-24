const pessoa = { 
    nome: "João",
    idade: 30,
    Cidade: "São Paulo"
}
pessoa.profissao = "Engenheiro"
delete pessoa.idade
console.log(pessoa);
console.log(pessoa.Cidade);

for (let i in pessoa) {
console.log (i + ":" + pessoa [i])
}