import { Navbar } from './navbar.js';

function navigateTo(page) {
    location.hash = page;
}

function handleHashChange() {
    const page = location.hash.substr(1);
    const pages = ['home', 'catalogo', 'cosmica', 'upcycle'];

    pages.forEach(p => {
        document.getElementById(p).style.display = p === page ? 'block' : 'none';
    });
}

window.addEventListener('hashchange', handleHashChange);
window.addEventListener('load', () => {
    if (!location.hash) {
        location.hash = '#home';
    }
    handleHashChange();
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('navbar').appendChild(Navbar());
});
