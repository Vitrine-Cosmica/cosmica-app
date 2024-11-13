// Função para alternar entre as paginas
function show(shown, hidden) {
    document.getElementById(shown).style.display = 'block';
    document.getElementById(hidden).style.display = 'none';
    return false;
}

// Navbar
function Navbar() {
    const navbar = document.createElement('header');
    navbar.className = 'navbar';
    navbar.innerHTML = `
        <nav>
            <div class="logo">
                <img src="assets/img/LogoCosmicaNav.svg" width="80" height="auto" />
            </div>

            <div class="secoes">
            <a href="#" onclick="return show('PageHome', 'PageCosmica');">Home</a> 
            <a href="#" onclick="return show('PageCosmica', 'PageHome');">Cósmica</a> 
            <a href="#historias">Histórias</a> 
            <a href="#catalogo">Catálogo</a>
            </div>
        </nav>
    `;
    return navbar;
}


document.getElementById('navbar').appendChild(Navbar());
