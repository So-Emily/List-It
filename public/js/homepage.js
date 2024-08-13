document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.indi-card');

    cards.forEach(card => {
        const images = JSON.parse(card.getAttribute('data-images'));
        let currentIndex = 0;

        // Preload the first image
        const img = new Image();
        img.src = images[0];
        img.onload = () => {
            card.querySelector('.card').style.backgroundImage = `url(${images[0]})`;
        };

        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            card.querySelector('.card').style.backgroundImage = `url(${images[currentIndex]})`;
        }, 4000); // Change image every 4 seconds
    });
});