function BotaoHome() {
    const botaoHome = document.createElement('section');
    botaoHome.className = 'botaoHome';
    botaoHome.innerHTML = `
            <a href="#PageCatalogo"> 
                <button id="btn-home">Acesse agora o catálogo!</button> 
            </a>
    `;
    const botaoHomeSection = document.getElementById('BotaoHome');
    botaoHomeSection.appendChild(botaoHome);
}

document.addEventListener('DOMContentLoaded', function() {
    BotaoHome();
});