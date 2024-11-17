// Função para alternar entre as paginas
function show(pageToShow, pageToHide) {
    document.getElementById(pageToShow).style.display = 'block';
    document.getElementById(pageToHide).style.display = 'none';
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

           <div class="container">
                <div class="navbar">
                    <nav>
                        <div class="secoes">
                        <a href="#" onclick="return show('PageHome', 'PageCosmica', 'Catalogo');">Home</a> 
                        <a href="#" onclick="return show('PageCosmica', 'PageHome', );">Cósmica</a> 
                        <a href="#">Histórias</a> 
                        <a href="#" onclick="return show('Catalogo', ');">Catálogo</a>
                        </div>
                    </nav>
                </div>
            </div>

        </nav>
    `;
    return navbar;
}


document.getElementById('navbar').appendChild(Navbar());
