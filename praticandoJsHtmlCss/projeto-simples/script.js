const cadastroForm = document.getElementById('cadastroForm');
const mensagem = document.getElementById('mensagem');
const listaAlunos = document.getElementById('listaAlunos');
let alunos = [];
cadastroForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    if (nome && telefone) {
        alunos.push({ nome, telefone });
        atualizarListaAlunos();
        mensagem.textContent = `Aluno cadastrado com sucesso! Nome: ${nome} Telefone: ${telefone}`;
        mensagem.style.color = '#28a745';
        cadastroForm.reset();
    } else {
        mensagem.textContent = 'Por favor, preencha todos os campos.';
        mensagem.style.color = '#d9534f'; 
    }
});
function atualizarListaAlunos() {
    listaAlunos.innerHTML = '';
    alunos.forEach(aluno => {
        const li = document.createElement('ol'); 
        li.textContent = `Nome: ${aluno.nome}, Telefone: ${aluno.telefone}`; 
        listaAlunos.appendChild(li); 
    });
}