/**  @type {HTMLCanvasElement} */
// Este es un comentario de tipo JSDoc que se utiliza en el código fuente para documentar el tipo de una variable. En este caso, el comentario indica que la variable es de tipo HTMLCanvasElement, que es un objeto de JavaScript que representa un elemento de lienzo HTML, utilizado para dibujar gráficos en una página web.

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;

enemy1 = {
    x: 0,
    y: 0,
    width: 200,
    height: 200,
}