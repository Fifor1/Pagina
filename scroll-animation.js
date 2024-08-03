// Mostrar elementos con transición al hacer scroll
window.addEventListener('scroll', () => {
    document.querySelectorAll('.cuadro').forEach(cuadro => {
        const cuadroTop = cuadro.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cuadroTop < windowHeight) {
            cuadro.classList.add('visible');
        }
    });
});
