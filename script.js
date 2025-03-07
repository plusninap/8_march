const snowflakeCount = 100;

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.textContent = '♥';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.fontSize = Math.random() * 20 + 10 + 'px';
    snowflake.style.opacity = Math.random();
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(snowflake);

    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

for (let i = 0; i < snowflakeCount; i++) {
    createSnowflake();
}

setInterval(createSnowflake, 30);
