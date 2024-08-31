// Função para gerar o header
function gerarHeader() {
    let header = `
        <nav class="container-fluid" style="background: #212122;">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <p>IsabelleVolaco</p>
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="../Conhecimentos/conhecimentos.html" class="nav-link">Conhecimentos</a></li>
                    <li><a href="../Servicos/servicos.html" class="nav-link">Serviços</a></li>
                    <li><a href="../Profissional/profissional.html" class="nav-link">Profissional</a></li>
                    <li><a href="../Cursos/cursos.html" class="nav-link">Cursos</a></li>
                </ul>

                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                </div>
            </div>
        </nav>
     `;

    // Inserir a header no elemento com o id "header-container"
    document.getElementById('header-container').innerHTML = header;
}

// Função para carregar o Bootstrap dinamicamente
function carregarBootstrap() {
    let head = document.head;
    
    // Link CSS do Bootstrap
    let linkBootstrapCSS = document.createElement('link');
    linkBootstrapCSS.rel = 'stylesheet';
    linkBootstrapCSS.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css';
    linkBootstrapCSS.integrity = 'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC';
    linkBootstrapCSS.crossOrigin = 'anonymous';
    head.appendChild(linkBootstrapCSS);
    
    // Script do JS do Bootstrap
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