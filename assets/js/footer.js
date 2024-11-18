function Footer() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="contact-info"> 
            <p>Telefone: (11) 1234-5678</p> 
            <p>Email: Alexia@Cosmica.com</p> 
        </div> 
        <div class="social-icons"> 
        
            <a href="https://www.instagram.com/cosmicacria" target="_blank"> 
                <img src="/assets/img/instagram.png" alt="Instagram"> 
            </a> 
            
            <a href="https://www.pinterest.com/cosmicacria" target="_blank"> 
                <img src="/assets/img/pinterest.png" alt="Pinterest"> 
            </a> 
            
            <a href="https://wa.me/1234567890" target="_blank"> 
                <img src="/assets/img/whatsapp.png" alt="WhatsApp"> 
            </a>
        </div>
    `;
    return footer;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('footer').appendChild(Footer());
});

