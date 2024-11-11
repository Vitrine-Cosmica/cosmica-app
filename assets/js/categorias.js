function Categorias() {
    const categorias = document.createElement('section');
    categorias.className = 'categorias';
    categorias.innerHTML = `
        <div class="itens">
            <div class="item">
                <img src="assets/img/minibag1.JPEG" />
                <div class="txt-categoria">Minibags</div>
            </div>
            <div class="item">
            <img src="assets/img/mochila.JPG" />
            <div class="txt-categoria">Mochilas</div>
            </div>
            <div class="item">
                <img src="assets/img/pochete.JPEG" />
                <div class="txt-categoria">Pochetes</div>
            </div>
            <div class="item">
                <img src="assets/img/bolsa.JPG" />
                <div class="txt-categoria">Bolsas</div>
            </div>
        </div>
    `;
    const categoriasSection = document.getElementById('categorias');
    categoriasSection.appendChild(categorias);
}

document.addEventListener('DOMContentLoaded', function() {
    Categorias();
});