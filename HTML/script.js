// Este script muestra un mensaje cuando se hace clic en una foto
document.querySelectorAll(".galeria img").forEach(img => {
    img.addEventListener("click", () => {
        alert("Estás viendo: " + img.alt);
    });
});
