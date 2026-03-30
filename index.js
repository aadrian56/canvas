// Selección de elementos del DOM
const canvas = document.getElementById('main-canvas');
const ctx = canvas.getContext('2d'); // Acceso al contexto 2D de la API de Canvas

// Variables para almacenar las coordenadas iniciales del trazo
let inicialX;
let inicialY;

/**
 * Función principal para realizar el dibujo en el canvas
 * @param {number} cursorX - Coordenada X actual del mouse
 * @param {number} cursorY - Coordenada Y actual del mouse
 */
const dibujar = (cursorX, cursorY) => {
    ctx.beginPath(); // Inicia un nuevo trazo
    ctx.moveTo(inicialX, inicialY); // Mueve el "lápiz" al punto inicial
    
    // Configuración del estilo del pincel
    ctx.lineWidth = 1; // Grosor del trazo
    ctx.strokeStyle = "#000000"; // Color del trazo (negro)
    ctx.lineCap = "round"; // Bordes redondeados
    ctx.lineJoin = "round"; // Uniones redondeadas
    
    ctx.lineTo(cursorX, cursorY); // Dibuja la línea hasta la posición actual
    ctx.stroke(); // Renderiza el trazo en el lienzo
    
    // Actualiza las coordenadas iniciales para el siguiente segmento del movimiento
    inicialX = cursorX;
    inicialY = cursorY;
};

// Evento al presionar el botón del mouse (Click)
const mouseDown = (evt) => {
    // Guarda la posición inicial donde se hizo click
    inicialX = evt.offsetX;
    inicialY = evt.offsetY;
    
    dibujar(inicialX, inicialY);
    
    // Mientras el botón esté presionado, escucha el movimiento del mouse
    canvas.addEventListener('mousemove', mouseMove);
};

// Evento al mover el mouse
const mouseMove = (evt) => {
    // Llama a la función dibujar con las coordenadas actuales del movimiento
    dibujar(evt.offsetX, evt.offsetY);
};

// Evento al soltar el botón del mouse
const mouseUp = () => {
    // Deja de escuchar el movimiento para detener el dibujo
    canvas.removeEventListener('mousemove', mouseMove);
};

// Listeners principales para interactuar con el canvas
canvas.addEventListener('mousedown', mouseDown); // Inicia el dibujo
canvas.addEventListener('mouseup', mouseUp);     // Detiene el dibujo
