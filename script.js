// scripts.js
document.querySelectorAll('.boton').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el enlace se siga
        alert('¡Gracias por tu interés! Serás redirigido a la noticia.');
        window.location.href = this.href; // Redirige al enlace
    });
});