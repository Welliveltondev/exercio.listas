const form = document.getElementById('list-number');
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

    function adicionaLinha() {
    const inputNome = document.getElementById('nome')
    const inputNumero = document.getElementById('tel')


    let linha = '<tr>';
    linha += `<td>${inputNome.value}<td>`;
    linha += `<td>${inputNumero.value}<td>`;
    linha += `<td>${}<td>`;
    linha += '</tr>';

    linhas += linha;

    

    inputNome.value = '';
    inputNumero.value = '';
    }

    function atualizaTabela() {
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }
