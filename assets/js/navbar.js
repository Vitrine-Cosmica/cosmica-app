
function show(shown, hidden1, hidden2, hidden3) {
    document.getElementById(shown).style.display = 'block';
    document.getElementById(hidden1).style.display = 'none';
    document.getElementById(hidden2).style.display = 'none';
    document.getElementById(hidden3).style.display = 'none';
    
    const navLinks = document.querySelectorAll('.secoes a');
    navLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`a[onclick="return show('${shown}', '${hidden1}', '${hidden2}', '${hidden3}');"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    return false;
}

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
                    <a href="#" onclick="return show('PageHome', 'PageCatalogo', 'PageCosmica', 'PageUpcycle');">Home</a> 
                    <a href="#" onclick="return show('PageCosmica', 'PageCatalogo', 'PageHome', 'PageUpcycle');">Cósmica</a> 
                    <a href="#" onclick="return show('PageUpcycle', 'PageCatalogo', 'PageHome', 'PageCosmica');">Upcycle Afetivo</a>
                    <a href="#" onclick="return show('PageCatalogo', 'PageUpcycle', 'PageHome', 'PageCosmica');">Catálogo</a>
                </div>
            </div>
        </nav>
    `;
    return navbar;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('navbar').appendChild(Navbar());
});
