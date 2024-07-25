let cliente = {
    nome: 'Maria',
    idade: 35,
    cidade: 'Rio de Janeiro'
};

for (let chave in cliente) {
    console.log(`${chave}: ${cliente[chave]}`);
}

delete cliente.cidade;

console.log(cliente);
console.log('idade' in cliente);
console.log(cliente.hasOwnProperty('cidade'));