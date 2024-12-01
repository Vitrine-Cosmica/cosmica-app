function Avaliacoes() {
    const imgs3 = [
        ["/assets/img/avaliacoes/av1.png", "Minha mochila é versátil, única, espaçosa e se adapta a minha rotina de trabalho, academia e viagens. Eu amo cada detalha dela, a pelúcia que tem no bolso, os bolsos internos e até acolchoado das costas. O que faz ela ser tão especial pra mim é o fato dela ser resistente e linda, pois sei que quem fez criou todo um conceito pautado em usabilidade, upcycle e amor pelo o que faz."],
        ["/assets/img/avaliacoes/av2.png", "Amei minha experiencia com a cosmica a mochila supre todas as minhas necessidades do dia a dia visto que fico fora de casa o dia todo precisava de uma mochila espaçosa,compacta e confortavel e em lojas de varejo nao achei nada que fosse de qualidade ou remetesse meu estilo pessoal e personalidade, na cosmica pude escolher o estilo perfeito da minha companheira de viagem e de faculdade totalmente unica e personalizada, onde saio me perguntam aonde comprei, concerteza foi uma otima compra!"],
        ["/assets/img/avaliacoes/av3.png", "Boa noite Alexia. A encomenda chegou perfeita! Eu ameeeeei as duas! Lindas demais! Muito obrigado!"],
        ["/assets/img/avaliacoes/av4.png", "Só passando pra te agradecer... que mochila incrível, amei demais, Obrigada pelo empenho! Seu trabalho é criativo e lindo."],
        ["/assets/img/avaliacoes/av5.png", "Amoreee, eu preciso te dizer: essa bolsa que você me fez é maravilhosa. Cara, cabe muita coisa nela, é bonita, prática, estilosa. Tô amando. Não tiro mais do ombro. Você é um arrasou. Parabéns!!"]
    ];

    
    const opc3 = ["imgopc11", "imgopc12", "imgopc13"];
    const opc2 = ["imgopc01", "imgopc02"];

    const avaliacoes = document.createElement('section');
    avaliacoes.className = 'avaliacoes';
    avaliacoes.innerHTML = `
        <h1>Nossas Avaliações</h1>
        <div class="crsImg3">
            <div class="setaesquerda">
                <img src="/assets/img/avaliacoes/back.png" id="btn-anterior3" width="30"/>
            </div>
            <div class="img-wrapper">
                <img src="${imgs3[0][0]}" class="img-avaliacao" id="imgopc11" />
                <div class="subtitle">${imgs3[0][1]}</div>
            </div>
            <div class="img-wrapper">
                <img src="${imgs3[1][0]}" class="img-avaliacao" id="imgopc12" />
                <div class="subtitle">${imgs3[1][1]}</div>
            </div>
            <div class="img-wrapper">
                <img src="${imgs3[2][0]}" class="img-avaliacao" id="imgopc13" />
                <div class="subtitle">${imgs3[2][1]}</div>
            </div>
            <div class="setadireita">
                <img src="/assets/img/avaliacoes/next.png" id="btn-proxima3" width="30"/>
            </div>
        </div>
        <div class="crsImg2">
            <div class="setaesquerda">
                <img src="/assets/img/avaliacoes/back.png" id="btn-anterior2" width="30"/>
            </div>
            <div class="img-wrapper">
                <img src="${imgs3[3][0]}" class="img-avaliacao" id="imgopc01" />
                <div class="subtitle">${imgs3[3][1]}</div>
            </div>
            <div class="img-wrapper">
                <img src="${imgs3[4][0]}" class="img-avaliacao" id="imgopc02" />
                <div class="subtitle">${imgs3[4][1]}</div>
            </div>
            <div class="setadireita">
                <img src="/assets/img/avaliacoes/next.png" id="btn-proxima2" width="30"/>
            </div>
        </div>
        <div class="crsImg1">
            <div class="setaesquerda">
                <img src="/assets/img/avaliacoes/back.png" id="btn-anterior1" width="30"/>
            </div>
            <div class="img-wrapper">
                <img src="${imgs3[0][0]}" class="img-avaliacao" id="imgopc1" />
                <div class="subtitle">${imgs3[0][1]}</div>
            </div>
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
        for (let i = 0; i < opc3.length; i++) {
            const imgElement = document.getElementById(opc3[i]);
            imgElement.classList.add('fade-out');
            setTimeout(() => {
                const imgData = imgs3[(conjuntoAtual3 + i) % imgs3.length];
                imgElement.src = imgData[0];
                imgElement.nextElementSibling.textContent = imgData[1];
                imgElement.classList.remove('fade-out');
                imgElement.classList.add('fade-in');
                setTimeout(() => imgElement.classList.remove('fade-in'), 500);
            }, 500);
        }
    }

    let conjuntoAtual2 = 0;
    function proximg2() {
        conjuntoAtual2 = (conjuntoAtual2 + 1) % imgs3.length;
        exibirConjunto2();
    }
    function imganterior2() {
        conjuntoAtual2 = (conjuntoAtual2 - 1 + imgs3.length) % imgs3.length;
        exibirConjunto2();
    }
    function exibirConjunto2() {
        for (let i = 0; i < opc2.length; i++) {
            const imgElement = document.getElementById(opc2[i]);
            imgElement.classList.add('fade-out');
            setTimeout(() => {
                const imgData = imgs3[(conjuntoAtual2 + i) % imgs3.length];
                imgElement.src = imgData[0];
                imgElement.nextElementSibling.textContent = imgData[1];
                imgElement.classList.remove('fade-out');
                imgElement.classList.add('fade-in');
                setTimeout(() => imgElement.classList.remove('fade-in'), 500);
            }, 500);
        }
    }

    let imgAtual = 0;
    function proximg1() {
        imgAtual = (imgAtual >= imgs3.length - 1) ? 0 : imgAtual + 1;
        animateImageChange("imgopc1", imgs3[imgAtual]);
    }
    function imganterior1() {
        imgAtual = (imgAtual <= 0) ? imgs3.length - 1 : imgAtual - 1;
        animateImageChange("imgopc1", imgs3[imgAtual]);
    }
    function animateImageChange(id, imgData) {
        const img = document.getElementById(id);
        img.classList.add('fade-out');
        setTimeout(() => {
            img.src = imgData[0];
            img.nextElementSibling.textContent = imgData[1];
            img.classList.remove('fade-out');
            img.classList.add('fade-in');
            setTimeout(() => img.classList.remove('fade-in'), 500);
        }, 500);
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
