// Lightbox profesional para galería de fotos
document.addEventListener('DOMContentLoaded', function () {
    // Crear el modal/lightbox
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <img src="" alt="" id="lightbox-img">
            <div class="lightbox-caption"></div>
            <button class="lightbox-prev">&#10094;</button>
            <button class="lightbox-next">&#10095;</button>
        </div>
    `;
    document.body.appendChild(lightbox);

    const images = Array.from(document.querySelectorAll('.galeria img'));
    let currentIndex = 0;

    // Función para abrir el lightbox
    function openLightbox(index) {
        currentIndex = index;
        const img = images[currentIndex];
        document.getElementById('lightbox-img').src = img.src;
        document.getElementById('lightbox-img').alt = img.alt;
        document.querySelector('.lightbox-caption').textContent = img.alt;
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    // Función para cerrar el lightbox
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Función para navegar a la siguiente imagen
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        openLightbox(currentIndex);
    }

    // Función para navegar a la imagen anterior
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        openLightbox(currentIndex);
    }

    // Event listeners para cada imagen
    images.forEach((img, index) => {
        img.addEventListener('click', () => openLightbox(index));
        img.style.cursor = 'pointer';
    });

    // Event listeners para controles del lightbox
    document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    document.querySelector('.lightbox-next').addEventListener('click', nextImage);
    document.querySelector('.lightbox-prev').addEventListener('click', prevImage);

    // Cerrar al hacer clic fuera de la imagen
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'Escape') closeLightbox();
        }
    });
});
