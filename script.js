// scripts.js
document.querySelectorAll('.boton').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el enlace se siga
        alert('¡Gracias por tu interés! Serás redirigido a la noticia en unos segundos');

        setTimeout(() => {
            window.location.href = this.href;
        }, 6000);
    });
});
