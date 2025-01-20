// Navbar scroll effect.
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#212529';
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.backgroundColor = '#212529';
        navbar.style.padding = '1rem 0';
    }
});

// Smooth scrolling for anchor links.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


window.addEventListener('load', function() {
    console.log("El script se ha cargado correctamente.");

    const selectTyped = document.getElementById('typed-subtitle');
    if (selectTyped) {
        let typed_strings = selectTyped.getAttribute('data-typed-items');
        typed_strings = typed_strings.split(','); // Dividir los textos por comas
        new Typed('#typed-subtitle', {
            strings: typed_strings, // Usar el array obtenido
            typeSpeed: 100, // Velocidad de tipeo
            backSpeed: 50, // Velocidad de borrado
            backDelay: 2000, // Tiempo de espera antes de borrar
            loop: true, // Para que se repita en bucle
            showCursor: true, // Ocultar el cursor
            cursorChar: '|', // El carácter del cursor
            cursorClass: 'typed-cursor' // Clase CSS personalizada para el cursor
        });
    }
});

function copyEmail() {
    const email = 'dev.dmartinoli@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        alert('Email copiado al portapapeles');
    }, (err) => {
        console.error('Error al copiar el email: ', err);
    });
}
