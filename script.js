const btnOpenElement = document.getElementById('open');
const btnElementClose = document.getElementById('close');
const coverElement = document.querySelector('.cover');
const paperElement = document.querySelector('.paper');
const letterElement = document.querySelector('.letter');
const corazones = [
    document.querySelector('.cont-corazon-1'),
    document.querySelector('.cont-corazon-2'),
    document.querySelector('.cont-corazon-3')
];

// Función para animar los corazones
function animarCorazones() {
    const duracion = 500; // Duración de la animación en milisegundos (.5 segundos)
    const inicio = performance.now();

    function animar(tiempoActual) {
        const tiempoTranscurrido = tiempoActual - inicio;
        const progreso = Math.min(tiempoTranscurrido / duracion, 2); // Normalizar el progreso entre 0 y 1

        // Animación para cada corazón
        corazones.forEach((corazon, index) => {
            const direccion = index === 0 ? 1 : index === 1 ? -1 : 0.5; // Dirección horizontal diferente para cada corazón
            const x = Math.sin(progreso * Math.PI * 2) * 30 + (progreso * 100 * direccion); // Movimiento horizontal
            const y = progreso * -200; // Movimiento vertical hacia arriba
            const opacidad = 1 - progreso; // Desvanecimiento

            // Aplicar transformaciones y opacidad
            corazon.style.transform = `translate(${x}px, ${y}px) rotate(${index === 0 ? 20 : index === 1 ? -10 : 10}deg)`;
            corazon.style.opacity = opacidad;
        });

        if (progreso < 1) {
            requestAnimationFrame(animar); // Continuar la animación
        }
    }

    requestAnimationFrame(animar); // Iniciar la animación
}

// Función para resetear los corazones progresivamente
function resetearCorazones() {
    const duracion = 0; // Duración de la animación de regreso
    const inicio = performance.now();

    function animar(tiempoActual) {
        const tiempoTranscurrido = tiempoActual - inicio;
        const progreso = Math.min(tiempoTranscurrido / duracion, 1); // Normalizar el progreso entre 0 y 1

        // Animación de regreso para cada corazón
        corazones.forEach((corazon, index) => {
            const direccion = index === 0 ? 1 : index === 1 ? -1 : 0.5; // Dirección horizontal diferente para cada corazón
            const x = Math.sin((1 - progreso) * Math.PI * 2) * 30 + ((1 - progreso) * 100 * direccion); // Movimiento horizontal inverso
            const y = (1 - progreso) * -200; // Movimiento vertical inverso
            const opacidad = progreso; // Restaurar opacidad

            // Aplicar transformaciones y opacidad
            corazon.style.transform = `translate(${x}px, ${y}px) rotate(${index === 0 ? 20 : index === 1 ? -10 : 10}deg)`;
            corazon.style.opacity = opacidad;
        });

        if (progreso < 1) {
            requestAnimationFrame(animar); // Continuar la animación
        }
    }

    requestAnimationFrame(animar); // Iniciar la animación
}

// Evento para abrir la carta
btnOpenElement.addEventListener('click', () => {
    coverElement.classList.add('open-cover');
    animarCorazones(),

    setTimeout(() => {
        paperElement.classList.add('open-paper');
        coverElement.style.zIndex = -1;
        paperElement.style.zIndex = 1
        setTimeout(() =>{
            paperElement.classList.remove('open-paper')
        }, 1000)
    }, 1000);
});

// Evento para cerrar la carta
btnElementClose.addEventListener('click', () => {
    paperElement.classList.add('open-paper');   
    resetearCorazones(); // Reiniciar los corazones progresivamente

    setTimeout(() => {
        letterElement.style.zIndex = 1 
        paperElement.style.zIndex = 0
        paperElement.classList.remove('open-paper')
        setTimeout(() =>{
            coverElement.classList.remove('open-cover');
            coverElement.style.zIndex = 1;
        }, 1000)
    }, 1000);
});