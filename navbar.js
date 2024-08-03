// navbar.js

window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var navbar = document.querySelector('.navbar');

    if (window.scrollY > header.offsetHeight) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = header.offsetHeight + 'px';
    }
});
