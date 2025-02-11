

document.body.addEventListener('click', createSparkles);

function createSparkles(event) {
    const numSparkles = 30;
    const centerX = event.clientX;
    const centerY = event.clientY;

    for (let i = 0; i < numSparkles; i++) {
        createSparkle(centerX, centerY);
    }
}

function createSparkle(x, y) {

    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 60 + 20;
    const duration = Math.random() * 600 + 400;

    const startX = x;
    const startY = y;
    const endX = x + Math.cos(angle) * distance;
    const endY = y + Math.sin(angle) * distance;

    sparkle.style.left = `${startX}px`;
    sparkle.style.top = `${startY}px`;

    document.body.appendChild(sparkle);

    // Animate the sparkle
    sparkle.animate([
        { transform: `translate(0, 0) scale(1)`, opacity: 1 },
        { transform: `translate(${endX - startX}px, ${endY - startY}px) scale(0)`, opacity: 0 }
    ], {
        duration: duration,
        easing: 'cubic-bezier(0,0,0.2,1)'
    }).onfinish = () => sparkle.remove();
}