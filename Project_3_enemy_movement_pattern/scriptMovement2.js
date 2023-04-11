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
  constructor() {
    // Cargar imagen del enemigo
    this.image = new Image();
    this.image.src = "enemy2.png";
    // Velocidad aleatoria del enemigo
    this.speed = Math.random() * 4 + 1;
    // Tamaño de la imagen de sprite
    this.spriteWidth = 266;
    this.spriteHeight = 188;
    // Tamaño del enemigo
    this.width = this.spriteWidth / 2;
    this.height = this.spriteHeight / 2;
    // Posición inicial aleatoria del enemigo en la pantalla
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    // Frame actual del sprite del enemigo
    this.frame = 0;
    // Velocidad de animación del sprite
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    // Ángulo actual del enemigo
    this.angle = 0;
    // Velocidad de rotación del enemigo
    this.angleSpeed = Math.random() * 0.2;
    // Curva de movimiento del enemigo
    this.curve = Math.random() * 5;
  }
  update() {
    // Mover al enemigo hacia la izquierda
    this.x -= this.speed;
    // Mover al enemigo en una curva sinusoidal
    this.y += this.curve * Math.sin(this.angle);
    // Ajustar el ángulo del enemigo
    this.angle += this.angleSpeed;
    // Si el enemigo sale de la pantalla, volverlo a colocar en el lado derecho
    if (this.x + this.width < 0) this.x = canvas.width;
    // Animar el sprite del enemigo
    if (gameFrame % this.flapSpeed === 0) {
      // Cambiar al siguiente frame del sprite
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }
  draw() {
    // Dibujar el sprite del enemigo en la posición actual
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

// Creación de un array vacío para almacenar los enemigos
// Se crea un bucle for para generar los enemigos y agregarlos al array
for (let i = 0; i < numberOfEnemies; i++) {
  enemiesArray.push(new Enemy());
}

// Función que se encarga de la animación
const animate = () => {
  // Se limpia el canvas
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // Se actualizan y dibujan los enemigos del array
  enemiesArray.forEach((enemy) => {
    enemy.update();
    enemy.draw();
  });

  // Se incrementa el contador de frames del juego
  gameFrame++;

  // Se llama a la función animate() de manera recursiva usando requestAnimationFrame
  requestAnimationFrame(animate);
};

// Se llama a la función animate() por primera vez para iniciar la animación
animate();
