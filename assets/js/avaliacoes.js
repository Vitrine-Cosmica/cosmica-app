function Avaliacoes() {
    let imgAtual = 0;
    const imgs = [
        "/assets/img/avaliacoes/av1.png", 
        "/assets/img/avaliacoes/av2.png", 
        "/assets/img/avaliacoes/av3.png"
    ];

    const avaliacoes = document.createElement('section');
    avaliacoes.className = 'avaliacoes';
    avaliacoes.innerHTML = `
        <div class="crsImg">

            <div class="setaesquerda">
                <img src="/assets/img/avaliacoes/back.png" id="btn-anterior" width="30"/>
            </div>

            <img src="${imgs[0]}" class="img-thumbnail" id="imgopc1" />
            <img src="${imgs[1]}" class="img-thumbnail" id="imgopc2" />
            <img src="${imgs[2]}" class="img-thumbnail" id="imgopc3" />

            <div class="setadireita">
                <img src="/assets/img/avaliacoes/next.png" id="btn-proxima" width="30"/>
            </div>

        </div>
    `;

    function imganterior() {
        imgAtual = (imgAtual <= 0) ? imgs.length - 1 : imgAtual - 1;
        document.getElementById("imgopc1").src = imgs[imgAtual];
        document.getElementById("imgopc2").src = imgs[imgAtual];
        document.getElementById("imgopc3").src = imgs[imgAtual];
    }

    function proximg() {
        imgAtual = (imgAtual >= imgs.length - 1) ? 0 : imgAtual + 1;
        document.getElementById("imgopc1").src = imgs[imgAtual];
        document.getElementById("imgopc2").src = imgs[imgAtual];
        document.getElementById("imgopc3").src = imgs[imgAtual];
    }

    avaliacoes.querySelector('#btn-anterior').addEventListener('click', imganterior);
    avaliacoes.querySelector('#btn-proxima').addEventListener('click', proximg);

    const avaliacoesSection = document.getElementById('avaliacoes');
    avaliacoesSection.appendChild(avaliacoes);
}

document.addEventListener('DOMContentLoaded', function() {
    Avaliacoes();
});
