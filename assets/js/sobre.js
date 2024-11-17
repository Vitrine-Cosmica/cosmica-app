function Sobre() {
    const sobre = document.createElement('section');
    sobre.className = 'sobre';
    sobre.innerHTML = `
        <div class="sobre-content">
            <div class="textos-sobre">
                <h1>Cosmica</h1>
                <h3>Quem faz e como faz?</h3>
                <p class="texto-sobre">
                    Todas as criações e produção são feitas por mim, Alexia.
                    Carioca, pisciana, budista, militante, eco designer.
                    Nossas peças são feitas através da técnica chamada Upcycle, que visa reutilizar materiais que já cumpriram
                    sua função dentro do ciclo de vida, mas que ainda tem muito para oferecer. Utilizamos em nossas criações roupas,
                    banners, guarda-chuva, resíduos de produções e refugo da indústria têxtil local.
                    Diversos materiais que se transformam em peças com design único.
                </p>
            </div>
            <img src="/assets/img/sobre/sobre.png" class="img-sobre"/>
            <img src="/assets/img/sobre/sobrePequeno.png" class="img-sobrepequeno"/>
        </div>
    `;

    const sobreSection = document.getElementById('sobre');
    sobreSection.appendChild(sobre);
}

document.addEventListener('DOMContentLoaded', function() {
    Sobre();
});
