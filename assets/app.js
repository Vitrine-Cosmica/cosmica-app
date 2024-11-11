document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    let currentSection = 0;

    function scrollToSection(index) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
    }

    window.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            // Scroll para baixo
            currentSection = Math.min(currentSection + 1, sections.length - 1);
        } else {
            // Scroll para cima
            currentSection = Math.max(currentSection - 1, 0);
        }
        scrollToSection(currentSection);
    });
});


