// Função para gerar a header
function gerarHeader() {
    var header = '<nav style="background: grey;">';
    header += '<ul>';
    header += '<li><a href="../Conhecimentos/conhecimentos.html">Conhecimentos</a></li>';
    header += '<li><a href="../Servicos/servicos.html">Serviços</a></li>';
    header += '<li><a href="../Profissional/profissional.html">Profissional</a></li>';
    header += '<li><a href="../Cursos/cursos.html">Cursos</a></li>';
    header += '</ul>';
    header += '</nav>';

    // Inserir a header no elemento com o id "header-container"
    document.getElementById('header-container').innerHTML = header;
}

// Chamar a função ao carregar a página
window.addEventListener('load', gerarHeader);