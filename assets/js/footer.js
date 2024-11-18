function Footer() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="contact-info"> 
            <p>Telefone: (11) 1234-5678</p> 
            <p>Email: contato@seusite.com</p> 
        </div> 
        <div class="social-icons"> 
            <a href="https://wa.me/1234567890" target="_blank"> 
            <img src="caminho/para/whatsapp.png" alt="WhatsApp"> </a> 
            <a href="https://www.instagram.com/seuperfil" target="_blank"> 
            <img src="caminho/para/instagram.png" alt="Instagram"> </a> 
            <a href="https://www.pinterest.com/seuperfil" target="_blank"> 
            <img src="caminho/para/pinterest.png" alt="Pinterest"> </a> 
        </div>
    `;
    return footer;
}


document.getElementById('footer').appendChild(Footer());
