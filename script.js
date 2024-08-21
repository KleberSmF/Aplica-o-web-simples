function adicionarCliente(nome, email) {
    const listaClientes = document.getElementById('lista-clientes');

    const li = document.createElement('li');
    li.textContent = `${nome} - ${email}`;

    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.className = 'excluir';
    botaoExcluir.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(botaoExcluir);
    listaClientes.appendChild(li);
}
document.getElementById('form-cadastro').addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    adicionarCliente(nome, email);

    document.getElementById('form-cadastro').reset();
});
