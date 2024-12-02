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

// Lógica para alternar la dirección de Santa
function animateSanta() {
    const santaContainer = document.querySelector('.santa-container');
    const reindeers = document.querySelector('.reindeers');
    const sleigh = document.querySelector('.sleigh');

    let goingRight = true;

    santaContainer.style.transition = 'transform 2s linear';
    let positionX = -300;
    let positionY = -200;

    setInterval(() => {
        // Cambiar dirección si Santa llega a un borde
        if (positionX > window.innerWidth || positionY > window.innerHeight) {
            goingRight = false;
        } else if (positionX < -300 || positionY < -200) {
            goingRight = true;
        }

        // Mover Santa
        positionX += goingRight ? 200 : -200;
        positionY += goingRight ? 100 : -100;

        santaContainer.style.transform = `translate(${positionX}px, ${positionY}px)`;

        // Voltear las imágenes según la dirección
        if (!goingRight) {
            reindeers.classList.add('flip-horizontal');
            sleigh.classList.add('flip-horizontal');
        } else {
            reindeers.classList.remove('flip-horizontal');
            sleigh.classList.remove('flip-horizontal');
        }
    }, 2000); // Actualizar cada 2 segundos
}

window.onload = () => {
    createSnowflakes();
    animateSanta();
};
