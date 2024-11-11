function Navbar() {
    const navbar = document.createElement('header');
    navbar.className = 'navbar';
    navbar.innerHTML = `
        <nav>
            <div class="logo">
                <img src="assets/img/CosmicaLogo.png" width="75" height="31" />
            </div>
            <a href="/index.html">Home</a>|
            <a href="#sobre">Cósmica</a>|
            <a href="#contato">Histórias</a>|
            <a href="#contato">Catálogo</a>
        </nav>
    `;
    return navbar;
}

document.getElementById('app').appendChild(Navbar());
