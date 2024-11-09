function Navbar() {
    const navbar = document.createElement('header');
    navbar.className = 'navbar'; // Adiciona uma classe para estilização
    navbar.innerHTML = `
        <nav>
            <div class="logo">
                <img src="assets/img/CosmicaLogo.png" width="75" height="31" />
            </div>
            <a href="#home">Home</a>|
            <a href="#sobre">Cósmica</a>|
            <a href="#contato">Histórias</a>|
            <a href="#contato">Catálogo</a>
        </nav>
    `;
    return navbar;
}

// Adicionando o componente diretamente ao app
document.getElementById('app').appendChild(Navbar());
