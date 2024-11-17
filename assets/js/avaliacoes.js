function Avaliacoes() {
    const imgs3 = [
        ["/assets/img/avaliacoes/av1.png", "/assets/img/avaliacoes/av2.png", "/assets/img/avaliacoes/av3.png"],
        ["/assets/img/avaliacoes/av2.png", "/assets/img/avaliacoes/av3.png", "/assets/img/avaliacoes/av4.png"],
        ["/assets/img/avaliacoes/av3.png", "/assets/img/avaliacoes/av4.png", "/assets/img/avaliacoes/av5.png"],
        ["/assets/img/avaliacoes/av4.png", "/assets/img/avaliacoes/av5.png", "/assets/img/avaliacoes/av1.png"],
        ["/assets/img/avaliacoes/av5.png", "/assets/img/avaliacoes/av1.png", "/assets/img/avaliacoes/av2.png"],
    ];
    const imgs2 = [
        ["/assets/img/avaliacoes/av1.png", "/assets/img/avaliacoes/av2.png"],
        ["/assets/img/avaliacoes/av2.png", "/assets/img/avaliacoes/av3.png"],
        ["/assets/img/avaliacoes/av3.png", "/assets/img/avaliacoes/av4.png"],
        ["/assets/img/avaliacoes/av4.png", "/assets/img/avaliacoes/av5.png"],
        ["/assets/img/avaliacoes/av5.png", "/assets/img/avaliacoes/av1.png"]
    ];
    const imgs1 = [
        "/assets/img/avaliacoes/av1.png",
        "/assets/img/avaliacoes/av2.png",
        "/assets/img/avaliacoes/av3.png",
        "/assets/img/avaliacoes/av4.png",
        "/assets/img/avaliacoes/av5.png",];


    const opc3 = [
        "imgopc11", 
        "imgopc12", 
        "imgopc13"
    ];

    const opc2 = [
        "imgopc01", 
        "imgopc02"
    ];



    const avaliacoes = document.createElement('section');
    avaliacoes.className = 'avaliacoes';
    avaliacoes.innerHTML = `
        <h1>Nossas Avaliações</h1>

        <div class="crsImg3">

            <div class="setaesquerda">
                <img src="/assets/img/avaliacoes/back.png" id="btn-anterior3" width="30"/>
            </div>

            <img src="/assets/img/avaliacoes/av1.png" class="img-avaliacao" id="imgopc11" />
            <img src="/assets/img/avaliacoes/av2.png" class="img-avaliacao" id="imgopc12" />
            <img src="/assets/img/avaliacoes/av3.png" class="img-avaliacao" id="imgopc13" />

            <div class="setadireita">
                <img src="/assets/img/avaliacoes/next.png" id="btn-proxima3" width="30"/>
            </div>

        </div>

        <div class="crsImg2">

            <div class="setaesquerda">
                <img src="/assets/img/avaliacoes/back.png" id="btn-anterior2" width="30"/>
            </div>

            <img src="/assets/img/avaliacoes/av1.png" class="img-avaliacao" id="imgopc01" />
            <img src="/assets/img/avaliacoes/av2.png" class="img-avaliacao" id="imgopc02" />

            <div class="setadireita">
                <img src="/assets/img/avaliacoes/next.png" id="btn-proxima2" width="30"/>
            </div>

        </div>

        <div class="crsImg1">

            <div class="setaesquerda">
                <img src="/assets/img/avaliacoes/back.png" id="btn-anterior1" width="30"/>
            </div>

            <img src="${imgs1[0]}" class="img-avaliacao" id="imgopc1" />

            <div class="setadireita">
                <img src="/assets/img/avaliacoes/next.png" id="btn-proxima1" width="30"/>
            </div>

        </div>


    `;

    let conjuntoAtual3 = 0;
    
    function proximg3() {
        conjuntoAtual3 = (conjuntoAtual3 + 1) % imgs3.length;
        exibirConjunto3();
    }
    
    function imganterior3() {
        conjuntoAtual3 = (conjuntoAtual3 - 1 + imgs3.length) % imgs3.length;
        exibirConjunto3();
    }

    function exibirConjunto3() {
        const conjunto3 = imgs3[conjuntoAtual3];
        for (let i = 0; i < opc3.length; i++) {
            document.getElementById(opc3[i]).src = conjunto3[i];
        }
    }

    let conjuntoAtual2 = 0;

    function proximg2() {
        conjuntoAtual2 = (conjuntoAtual2 + 1) % imgs2.length;
        exibirConjunto2();
    }

    function imganterior2() {
        conjuntoAtual2 = (conjuntoAtual2 - 1 + imgs2.length) % imgs2.length;
        exibirConjunto2();
    }

    function exibirConjunto2() {
        const conjunto2 = imgs2[conjuntoAtual2];
        for (let i = 0; i < opc2.length; i++) {
            document.getElementById(opc2[i]).src = conjunto2[i];
        }
    }

    let imgAtual = 0;

    function proximg1() {
        imgAtual = (imgAtual >= imgs1.length - 1) ? 0 : imgAtual + 1;
        document.getElementById("imgopc1").src = imgs1[imgAtual];
    }

    function imganterior1() {
        imgAtual = (imgAtual <= 0) ? imgs1.length - 1 : imgAtual - 1;        
        document.getElementById("imgopc1").src = imgs1[imgAtual];

    }

    avaliacoes.querySelector('#btn-anterior3').addEventListener('click', imganterior3);
    avaliacoes.querySelector('#btn-proxima3').addEventListener('click', proximg3);
    
    avaliacoes.querySelector('#btn-anterior2').addEventListener('click', imganterior2);
    avaliacoes.querySelector('#btn-proxima2').addEventListener('click', proximg2);

    avaliacoes.querySelector('#btn-anterior1').addEventListener('click', imganterior1);
    avaliacoes.querySelector('#btn-proxima1').addEventListener('click', proximg1);

    const avaliacoesSection = document.getElementById('avaliacoes');
    avaliacoesSection.appendChild(avaliacoes);
}

document.addEventListener('DOMContentLoaded', function() {
    Avaliacoes();
});
