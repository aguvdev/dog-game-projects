/**  @type {HTMLCanvasElement} */
// Este es un comentario de tipo JSDoc que se utiliza en el código fuente para documentar el tipo de una variable. En este caso, el comentario indica que la variable es de tipo HTMLCanvasElement, que es un objeto de JavaScript que representa un elemento de lienzo HTML, utilizado para dibujar gráficos en una página web.

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 30;
const enemiesArray = [];
let gameFrame = 0;

class Enemy {
  constructor(){
    this.image = new Image(); // Creación de una nueva imagen
    this.image.src = 'enemy1.png'; // Ruta de la imagen
    this.spriteWidth = 293; // Ancho de los sprites de la imagen
    this.spriteHeight = 155; // Alto de los sprites de la imagen
    this.width = this.spriteWidth / 2.5; // Ancho del enemigo
    this.height = this.spriteHeight / 2.5; // Alto del enemigo
    this.x = Math.random() * (canvas.width - this.width); // Posición en x aleatoria dentro del canvas
    this.y = Math.random() * (canvas.height - this.height); // Posición en y aleatoria dentro del canvas
    this.frame = 0; // Número de frame actual
    this.flapSpeed = Math.floor(Math.random() * 3 + 1); // Velocidad de animación
  }
  update(){
    this.x += Math.random() * 3 - 1.5; // Movimiento aleatorio en x
    this.y += Math.random() * 3 - 1.5; // Movimiento aleatorio en y
    // animate sprites
    if (gameFrame % this.flapSpeed === 0){ // Si el número de frame actual es múltiplo de la velocidad de animación
      this.frame > 4 ? this.frame = 0 : this.frame++; // Si ya se llegó al último frame, volver al primero
    };
  }
  draw(){
    ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height); // Dibujo del enemigo en el canvas
  }
}


for (let i = 0; i < numberOfEnemies; i++) {
  enemiesArray.push(new Enemy());
}

const animate = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemiesArray.forEach(enemy => {
    enemy.update();
    enemy.draw();
  });
  gameFrame++;
  requestAnimationFrame(animate);
};
animate();
