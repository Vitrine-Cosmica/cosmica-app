document.addEventListener('DOMContentLoaded', function() {
    // Create and append the CSS link
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/assets/css/catalogo.css'; 
    document.head.appendChild(link);

    // Update content for PageCatalogo
    const pageCatalogo = document.getElementById('PageCatalogo');
    if (pageCatalogo) {
        pageCatalogo.innerHTML = `
            <h1>Olá Mundo</h1>
        `;
    }
});
