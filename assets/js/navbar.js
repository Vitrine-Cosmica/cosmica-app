// Função para alternar entre as páginas
function show(shown, hidden1, hidden2) {
    document.getElementById(shown).style.display = 'block';
    document.getElementById(hidden1).style.display = 'none';
    document.getElementById(hidden2).style.display = 'none';
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
                <a href="#" onclick="return show('PageHome', 'PageCosmica', 'PageUpcycle');">Home</a> 
                <a href="#" onclick="return show('PageCosmica', 'PageHome', 'PageUpcycle');">Cósmica</a> 
                <a href="#" onclick="return show('PageUpcycle', 'PageHome', 'PageCosmica');">Upcycle Afetivo</a>
                <a href="#catalogo">Catálogo</a>
            </div>

        </nav>
    `;
    return navbar;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('navbar').appendChild(Navbar());
});

