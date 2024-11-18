document.addEventListener('DOMContentLoaded', function() {
    const produtos = [
        {
            nome: "Basic Bag",
            descricao: "Nossa primeira bolsa vendida aqui na Cósmica, há 4 anos ela é um sucesso entre nossos clientes. Leve e discreta seu tamanho parece pequeno, mas ela é uma bolsa muito espaçosa. Produzida de forma artesanal e afetuosa, com resíduo têxtil. Roupas descartadas e retalhos que receberam uma nova chance. Tem forro impermeável, alças acetinadas com 30mm, com mosquetões cromado. _Garantia_ Acreditando que durabilidade também é sustentabilidade por isso oferecemos concertos e reparos para sua bolsa ao longo do uso.",
            tamanho: "20x15x6",
            img: "/assets/img/produtos/basicbag.png",
            valores: ["R$99", "R$108", "R$117"]
        },
        {
            nome: "Pochete Luna",
            descricao: "A pochete Luna é a bolsa ideal para quem gosta de sair com pouca coisa. Com tamanho ideal para carregar apenas o necessário, ela é leve, discreta e confortável. Produzida de forma artesanal e afetuosa, com resíduo têxtil. Roupas descartadas e retalhos que receberam uma nova chance. Tem forro impermeável, alças acetinadas com 30mm e engate de nylon. _Garantia_ Acreditando que durabilidade também é sustentabilidade por isso oferecemos concertos e reparos para sua bolsa ao longo do uso.",
            tamanho: "28x11x4",
            img: "/assets/img/produtos/pochete.jpeg",
            valores: ["R$81", "R$90", "R$99"]
        },
        {
            nome: "Mochila Mudita",
            descricao: "Mudita significa Alegria. Mochila ideal para quem tem um dia-a-dia um pouco mais cheio ou gosta de está sempre viajando. Possui diversos bolsos externos, bolso interno para notebook até 17,3'. Forro impermeável fácil de limpar. Alças e costas acolchoadas e com tecido respirável. Produzida de forma artesanal e afetuosa, com resíduo têxtil. Roupas descartadas e retalhos que receberam uma nova chance. _Garantia_ Acreditando que durabilidade também é sustentabilidade por isso oferecemos concertos e reparos para sua mochila ao longo do uso.",
            tamanho: "47x28x15",
            img: "/assets/img/produtos/mochilamudita.png",
            valores: ["R$414", "R$423", "R$432"]
        },
        {
            nome: "Mochila Upeksha",
            descricao: "Upeksha significa equanimidade. Mochila ideal para o dia-a-dia, possui diversos bolsos externos, bolso interno para notebook até 15,6'. Forro impermeável fácil de limpar. Alças e costas acolchoadas e com tecido respirável. Produzida de forma artesanal e afetuosa, com resíduo têxtil. Roupas descartadas e retalhos que receberam uma nova chance. _Garantia_ Acreditando que durabilidade também é sustentabilidade por isso oferecemos concertos e reparos para sua mochila ao longo do uso. Ao comprar essa peça você está incentivando uma economia mais justa e sustentável para o planeta.",
            tamanho: "40x28x12",
            img: "/assets/img/produtos/mochilaupeksha.png",
            valores: ["R$324", "R$333", "R$342"]
        }
    ];

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/assets/css/catalogo.css'; 
    document.head.appendChild(link);

    const pageCosmica = document.getElementById('PageCatalogo');
    
    pageCosmica.innerHTML = `
        <div id="botoes-container">
            <button id="btn-basicBag">Basic Bag</button>
            <button id="btn-pocheteLuna">Pochete Luna</button>
            <button id="btn-mochilaMudita">Mochila Mudita</button>
            <button id="btn-mochilaUpeksha">Mochila Upeksha</button>
        </div>
        <div class="catalogo-content"></div>
    `;

    function atualizarProduto(index) {
        const produto = produtos[index];
        const catalogoContent = pageCosmica.querySelector('.catalogo-content');
        catalogoContent.innerHTML = `
            <h1>${produto.nome}</h1>
            <h2>Tamanho: ${produto.tamanho}</h2>
            <p>${produto.descricao}</p>
            <div class="informacoes-produto">
                <img src="${produto.img}" />
                <p>
                    Valor sustentável: ${produto.valores[0]} <br />
                    Valor generoso: ${produto.valores[1]} <br />
                    Valor Abundante: ${produto.valores[2]}
                </p>
            </div>
        `;
    }

    document.getElementById("btn-basicBag").addEventListener("click", () => atualizarProduto(0));
    document.getElementById("btn-pocheteLuna").addEventListener("click", () => atualizarProduto(1));
    document.getElementById("btn-mochilaMudita").addEventListener("click", () => atualizarProduto(2));
    document.getElementById("btn-mochilaUpeksha").addEventListener("click", () => atualizarProduto(3));

    atualizarProduto(0);
});
