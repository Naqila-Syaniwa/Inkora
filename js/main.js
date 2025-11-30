const images = [
    "assets/arts/art-banner-1.webp",
    "assets/arts/art-banner-2.webp",
    "assets/arts/art-banner-3.webp",
];

let currentIndex = 0;

const sliderImage = document.getElementById("sliderImage");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    sliderImage.src = images[currentIndex];
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    sliderImage.src = images[currentIndex];
});