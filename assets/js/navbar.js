function navigateTo(page) {
    location.hash = page;
}

function handleHashChange() {
    const page = location.hash.substr(1);
    const pages = ['PageHome', 'PageCatalogo', 'PageCosmica', 'PageUpcycle'];

    pages.forEach(p => {
        document.getElementById(p).style.display = p === page ? 'block' : 'none';
    });
}

window.addEventListener('hashchange', handleHashChange);
window.addEventListener('load', () => {
    if (!location.hash) {
        location.hash = 'PageHome';
    }
    handleHashChange();
});

function Navbar() {
    const navbar = document.createElement('header');
    navbar.className = 'navbar';
    navbar.innerHTML = `
        <nav>
            <div class="container">
                <div class="logo">
                    <img src="assets/img/LogoCosmicaNav.svg" width="80" height="auto" />
                </div>
                <div class="secoes">
                    <a href="#PageHome">Home</a>
                    <a href="#PageCosmica">Galeria Cósmica</a>
                    <a href="#PageUpcycle">Upcycle Afetivo</a>
                    <a href="#PageCatalogo">Catálogo</a>
                </div>
            </div>
        </nav>
    `;
    return navbar;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('navbar').appendChild(Navbar());
});
