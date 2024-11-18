document.addEventListener('DOMContentLoaded', function() {

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/assets/css/upcycle.css'; 


        const pageUpcycle = document.getElementById('PageUpcycle');
        if (pageUpcycle) {
            pageUpcycle.innerHTML = `
                <div class="titulo-upcycle">
                <h1>Roupas Contam Histórias</h1>
                </div>
                <p class="texto-upcycle">
                    Vivemos em um sistema econômico que nos estimula a desapegar. Mas existe uma cilada nessa narrativa: esse desapego é incentivado para que um novo consumo aconteça. Cresci ouvindo: “para cada roupa nova que você compra, você precisa doar pelo menos uma.” Fiz isso durante anos, acreditando que estava fazendo o bem. <br>
                    Com o tempo, percebi que essa prática virou combustível para a indústria da moda, gerando um fluxo constante de descarte e consumo. Quando olhamos com as lentes da economia circular, ao invés de simplesmente “doar” (ou descartar) uma roupa que não nos serve mais, perguntamos: é possível consertar? Dá para customizar? Posso transformar esse material em outra coisa? Só depois pensamos em descartá-la. <br>
                    Minha proposta é que você se apegue um pouco mais às coisas que já tem, explorando o potencial de transformação de cada peça. Antes de consumir algo novo, olhe para aquela roupa cheia de história e pense no que ela pode se tornar. Uma bolsa? Uma mochila? Essa é a ideia do upcycle afetivo.
                </p>
                <div class="imgupcycle">
                <img src="assets/img/upcycle/upcycle.png" alt="">
                </div>
                <button class="btn"><h1>Nos Contate!</h1></button>
            `;
        }
    });
    