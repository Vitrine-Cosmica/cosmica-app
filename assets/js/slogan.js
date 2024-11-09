function Slogan() {
    const slogan = document.createElement('header');
    slogan.className = 'slogan'; // Adiciona uma classe para estilização
    slogan.innerHTML = `
        <nav>
            <div>
                <img src="assets/img/LogoCompleto.png" width="400" />
            </div>
            <p>
                Quando você muda, o mundo muda!
            </p>
        </nav>
    `;
    return slogan;
}

// Adicionando o componente diretamente ao app
document.getElementById('app').appendChild(Slogan());
