// Função para gerar o header
function gerarHeader() {
    let header = '<nav style="background: #212122;">';
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

// Função para carregar o Bootstrap dinamicamente
function carregarBootstrap() {
    let head = document.head;
    
    // Inserir o link do CSS do Bootstrap
    let linkBootstrapCSS = document.createElement('link');
    linkBootstrapCSS.rel = 'stylesheet';
    linkBootstrapCSS.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css';
    linkBootstrapCSS.integrity = 'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC';
    linkBootstrapCSS.crossOrigin = 'anonymous';
    head.appendChild(linkBootstrapCSS);
    
    // Inserir o script do JS do Bootstrap
    let scriptBootstrapJS = document.createElement('script');
    scriptBootstrapJS.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js';
    scriptBootstrapJS.integrity = 'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM';
    scriptBootstrapJS.crossOrigin = 'anonymous';
    head.appendChild(scriptBootstrapJS);
}

// Função principal que será chamada ao carregar a página
function inicializarPagina() {
    gerarHeader();
    carregarBootstrap();
}

// Chamar a função principal ao carregar a página
window.addEventListener('load', inicializarPagina);