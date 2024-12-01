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
            img: "/assets/img/produtos/img2.png",
            valores: ["R$81", "R$90", "R$99"]
        },
        {
            nome: "Mochila Mudita",
            descricao: "Mudita significa Alegria. Mochila ideal para quem tem um dia-a-dia um pouco mais cheio ou gosta de está sempre viajando. Possui diversos bolsos externos, bolso interno para notebook até 17,3'. Forro impermeável fácil de limpar. Alças e costas acolchoadas e com tecido respirável. Produzida de forma artesanal e afetuosa, com resíduo têxtil. Roupas descartadas e retalhos que receberam uma nova chance. _Garantia_ Acreditando que durabilidade também é sustentabilidade por isso oferecemos concertos e reparos para sua mochila ao longo do uso.",
            tamanho: "47x28x15",
            img: "/assets/img/produtos/img3.png",
            valores: ["R$414", "R$423", "R$432"]
        },
        {
            nome: "Mochila Upeksha",
            descricao: "Upeksha significa equanimidade. Mochila ideal para o dia-a-dia, possui diversos bolsos externos, bolso interno para notebook até 15,6'. Forro impermeável fácil de limpar. Alças e costas acolchoadas e com tecido respirável. Produzida de forma artesanal e afetuosa, com resíduo têxtil. Roupas descartadas e retalhos que receberam uma nova chance. _Garantia_ Acreditando que durabilidade também é sustentabilidade por isso oferecemos concertos e reparos para sua mochila ao longo do uso. Ao comprar essa peça você está incentivando uma economia mais justa e sustentável para o planeta.",
            tamanho: "40x28x12",
            img: "/assets/img/produtos/img4.png",
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
            <button class="botoescatalogo" id="btn-basicBag"><p>Basic Bag</p></button>
            <button class="botoescatalogo" id="btn-pocheteLuna"><p>Pochete Luna</p></button>
            <button class="botoescatalogo" id="btn-mochilaMudita"><p>Mochila Mudita</p></button>
            <button class="botoescatalogo"  id="btn-mochilaUpeksha"><p>Mochila Upeksha</p></button>
        </div>
        <div class="catalogo-content"></div>
    `;

    function atualizarProduto(index) {
        const produto = produtos[index];
        const catalogoContent = document.querySelector('.catalogo-content');
        catalogoContent.innerHTML = `
            <div class="text-content">
                <h1>${produto.nome}</h1>
                <h2>Tamanho: ${produto.tamanho}</h2>
                <p>${produto.descricao}</p>
            </div>
            <div class="image-content">
                <img src="${produto.img}" alt="${produto.nome}" />
                <p class="precop">
                    Valor sustentável: ${produto.valores[0]} <br />
                    Valor generoso: ${produto.valores[1]} <br />
                    Valor Abundante: ${produto.valores[2]}
                </p>
                <button class="comprar-btn">Comprar
                <img src="/assets/img/whatsapp.png" class="wppbtnc">
                </button>
                <p class="descwpp">Para cores e modelos disponiveis, clique no botão acima para nos contatar pelo whatsapp!</p>
            </div>
        `;
        
        catalogoContent.scrollIntoView({ behavior: 'smooth' });
    }

    document.getElementById("btn-basicBag").addEventListener("click", () => atualizarProduto(0));
    document.getElementById("btn-pocheteLuna").addEventListener("click", () => atualizarProduto(1));
    document.getElementById("btn-mochilaMudita").addEventListener("click", () => atualizarProduto(2));
    document.getElementById("btn-mochilaUpeksha").addEventListener("click", () => atualizarProduto(3));

    atualizarProduto(0);
});
