function Categorias() {
    const categorias = document.createElement('section');
    categorias.className = 'categorias';
    categorias.innerHTML = `
        <div class="itens">
            <div class="item">
                <img  src="assets/img/categorias/minibag1.JPEG" class="categoriaimg" />
                <div class="txt-categoria">Bag Basica</div>
            </div>
            <div class="item">
            <img src="assets/img/categorias/mochila.JPG" class="categoriaimg"/>
            <div class="txt-categoria">Mochila Upeshka</div>
            </div>
            <div class="item">
                <img src="assets/img/categorias/pochete.JPEG" class="categoriaimg"/>
                <div class="txt-categoria">Pochete Luna</div>
            </div>
            <div class="item">
                <img src="assets/img/categorias/bolsa.JPG" class="categoriaimg"/>
                <div class="txt-categoria">Mochila Mudita</div>
            </div>
        </div>
    `;
    const categoriasSection = document.getElementById('categorias');
    categoriasSection.appendChild(categorias);
}

document.addEventListener('DOMContentLoaded', function() {
    Categorias();
});