function Avaliacoes() {
    const imgs = [
        ["/assets/img/avaliacoes/av1.png", "/assets/img/avaliacoes/av2.png", "/assets/img/avaliacoes/av3.png"],
        ["/assets/img/avaliacoes/av4.JPEG", "/assets/img/avaliacoes/av5.JPG", "/assets/img/avaliacoes/av6.JPG"]
    ];

    const opc = [
        "imgopc1", 
        "imgopc2", 
        "imgopc3"
    ];

    const avaliacoes = document.createElement('section');
    avaliacoes.className = 'avaliacoes';
    avaliacoes.innerHTML = `
        <h1>Nossas Avaliações</h1>

        <div class="crsImg">

            <div class="setaesquerda">
                <img src="/assets/img/avaliacoes/back.png" id="btn-anterior" width="30"/>
            </div>

            <img src="/assets/img/avaliacoes/av1.png" class="img-avaliacao" id="imgopc1" />
            <img src="/assets/img/avaliacoes/av2.png" class="img-avaliacao" id="imgopc2" />
            <img src="/assets/img/avaliacoes/av3.png" class="img-avaliacao" id="imgopc3" />

            <div class="setadireita">
                <img src="/assets/img/avaliacoes/next.png" id="btn-proxima" width="30"/>
            </div>

        </div>
    `;

    let conjuntoAtual = 0;

    function exibirConjunto() {
        const conjunto = imgs[conjuntoAtual];
        for (let i = 0; i < opc.length; i++) {
            document.getElementById(opc[i]).src = conjunto[i];
        }
    }

    function proximg() {
        conjuntoAtual = (conjuntoAtual + 1) % imgs.length;
        exibirConjunto();
    }

    function imganterior() {
        conjuntoAtual = (conjuntoAtual - 1 + imgs.length) % imgs.length;
        exibirConjunto();
    }


    avaliacoes.querySelector('#btn-anterior').addEventListener('click', imganterior);
    avaliacoes.querySelector('#btn-proxima').addEventListener('click', proximg);

    const avaliacoesSection = document.getElementById('avaliacoes');
    avaliacoesSection.appendChild(avaliacoes);
}

document.addEventListener('DOMContentLoaded', function() {
    Avaliacoes();
});
