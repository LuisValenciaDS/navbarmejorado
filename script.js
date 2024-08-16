const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');
const navLinks = document.querySelectorAll('.navbar a');

function toggleMenu() {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');

    // Forzar un reflow antes de aplicar las transiciones
    navbar.offsetHeight;

    if (navbar.classList.contains('active')) {
        navLinks.forEach((link, index) => {
            link.style.transitionDelay = `${index * 0.1}s`;
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        });
    } else {
        navLinks.forEach((link, index) => {
            link.style.transitionDelay = '0s';
            link.style.opacity = '0';
            link.style.transform = 'translateY(-20px)';
        });
    }
}

// Asegurarse de que los enlaces estén ocultos inicialmente en vista móvil
function initializeMenuState() {
    if (window.innerWidth <= 768) {
        navLinks.forEach(link => {
            link.style.opacity = '0';
            link.style.transform = 'translateY(-20px)';
        });
    }
}

menuIcon.addEventListener('click', toggleMenu);

// Inicializar el estado del menú al cargar la página
document.addEventListener('DOMContentLoaded', initializeMenuState);

// Manejar cambios de tamaño de ventana
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
        navbg.classList.remove('active');
        navLinks.forEach(link => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
            link.style.transitionDelay = '0s';
        });
    } else {
        initializeMenuState();
    }
});