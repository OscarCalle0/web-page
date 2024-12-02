// script.js

function createSnowflakes() {
    const snowContainer = document.querySelector('.snow');
    for (let i = 0; i < 100; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        const size = Math.random() * 5 + 2; // Tamaño aleatorio entre 2px y 7px
        const posX = Math.random() * window.innerWidth; // Posición X aleatoria
        const duration = Math.random() * 3 + 2; // Duración de caída entre 2s y 5s

        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${posX}px`;
        snowflake.style.animationDuration = `${duration}s`;
        snowflake.style.animationDelay = `${Math.random()}s`;

        snowContainer.appendChild(snowflake);
    }
}

window.onload = createSnowflakes;
