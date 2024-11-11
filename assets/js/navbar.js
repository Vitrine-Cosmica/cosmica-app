function Navbar() {
    const navbar = document.createElement('header');
    navbar.className = 'navbar';
    navbar.innerHTML = `
        <nav>
            <div class="logo">
                <img src="assets/img/LogoCosmicaNav.svg" width="70" height="auto" />
            </div>
            
            <div class="secoes">
            <a href="/index.html">Home</a>
            <a href="#sobre">Cósmica</a>
            <a href="#contato">Histórias</a>
            <a href="#contato">Catálogo</a>
            </div>
        </nav>
    `;
    return navbar;
}

document.getElementById('app').appendChild(Navbar());
