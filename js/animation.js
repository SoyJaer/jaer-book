// Creamos un "observador" que vigilará los elementos
const observer = new IntersectionObserver((entries) => {
    // Recorremos todas las "entradas" (elementos) que el observador detecta
    entries.forEach((entry) => {
        // Si el elemento es visible en la pantalla (isIntersecting)
        if (entry.isIntersecting) {
            // Le añadimos la clase 'show' para que se muestre con la animación
            entry.target.classList.add('show');
        } else {
            // Opcional: Si quieres que la animación se repita cada vez que entras y sales
            entry.target.classList.remove('show');
        }
    });
});

// Seleccionamos todos los elementos con la clase 'hidden'
const hiddenElements = document.querySelectorAll('.hidden');

// Le decimos al observador que vigile cada uno de esos elementos
hiddenElements.forEach((el) => observer.observe(el));

function openLightbox(imageUrl) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    lightboxImg.src = imageUrl;
    lightbox.style.display = 'flex'; // Usamos flex para centrar la imagen
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}


const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});

// Opcional: Cierra el menú al hacer clic en un enlace
document.querySelectorAll(".nav-menu-link").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("nav-menu_visible");
    });
});