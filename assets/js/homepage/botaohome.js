function BotaoHome() {
    const botaoHome = document.createElement('section');
    botaoHome.className = 'botaoHome';
    botaoHome.innerHTML = `
            <button id="btn-home">Acesse agora o catálogo!</button>
    `;
    const botaoHomeSection = document.getElementById('BotaoHome');
    botaoHomeSection.appendChild(botaoHome);
}

document.addEventListener('DOMContentLoaded', function() {
    BotaoHome();
});