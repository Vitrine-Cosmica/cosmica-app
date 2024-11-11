function Slogan() {
    const slogan = document.createElement('section');
    slogan.className = 'slogan'; 
    slogan.innerHTML = `
        <div>
            <div>
                <img src="assets/img/LogoCompleto.png" width="400" />
            </div>
            <p>
                Quando você muda, o mundo muda!
            </p>
        </div>
    `;
    const sloganSection = document.getElementById('slogan');
    sloganSection.appendChild(slogan);
}

document.addEventListener('DOMContentLoaded', function() {
    Slogan();
});
