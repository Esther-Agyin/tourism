document.addEventListener("DOMContentLoaded", () => {

    console.log("Gallery JS loaded");

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const galleryImages = document.querySelectorAll(".gallery-grid img");

    console.log("Images found:", galleryImages.length);

    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            console.log("Image clicked");
            lightbox.style.display = "flex";
            lightboxImage.src = img.src;
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
});