const letras = document.querySelectorAll('.letra');
const botonSiguiente = document.getElementById('siguiente');
const pantallaCarga = document.getElementById('pantalla-carga');
let letrasUbicadas = 0;

// Posiciones finales de las letras
const posicionesFinales = {
    "H": { left: "30%" },
    "o1": { left: "35%" },
    "l1": { left: "40%" },
    "a1": { left: "45%" },
    "l2": { left: "55%" },
    "i": { left: "60%" },
    "n": { left: "65%" },
    "d": { left: "70%" },
    "o2": { left: "75%" },
    "t": { left: "80%" },
    "a2": { left: "85%" }
};

// Función para mover la letra al centro
function moverLetra(event) {
    const letra = event.target;
    const caracter = letra.getAttribute('data-letra');

    if (!letra.classList.contains('ubicada')) {
        letra.style.left = posicionesFinales[caracter].left;
        letra.style.top = "50%";
        letra.classList.add('ubicada');
        letrasUbicadas++;

        // Verificar si todas las letras están ubicadas
        if (letrasUbicadas === letras.length) {
            botonSiguiente.classList.remove('oculto');
        }
    }
}

// Asignar evento clic a cada letra
letras.forEach(letra => {
    letra.addEventListener('click', moverLetra);
});

// Evento para el botón "Siguiente parte"
botonSiguiente.addEventListener('click', () => {
    window.location.href = 'pantallaDeCarga.html'
});