/**  @type {HTMLCanvasElement} */
// Este es un comentario de tipo JSDoc que se utiliza en el código fuente para documentar el tipo de una variable. En este caso, el comentario indica que la variable es de tipo HTMLCanvasElement, que es un objeto de JavaScript que representa un elemento de lienzo HTML, utilizado para dibujar gráficos en una página web.

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 10;
const enemiesArray = [];
let gameFrame = 0;

// Definimos la clase Enemy
class Enemy {
  constructor() {
    // Cargamos la imagen del enemigo
    this.image = new Image();
    this.image.src = "enemy4.png";
    // Definimos la velocidad del enemigo de forma aleatoria
    this.speed = Math.random() * 4 + 1;
    // Definimos las dimensiones del sprite del enemigo
    this.spriteWidth = 213;
    this.spriteHeight = 213;
    // Definimos las dimensiones del enemigo
    this.width = this.spriteWidth / 2;
    this.height = this.spriteHeight / 2;
    // Definimos la posición del enemigo de forma aleatoria dentro del canvas
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    // Definimos el frame inicial del sprite del enemigo y su velocidad de animación
    this.newX = Math.random() * canvas.width;
    this.newY = Math.random() * canvas.height;
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.interval = Math.floor(Math.random() * 200 + 50);
  }

  // Actualizamos la posición del enemigo y su animación
  update() {
    if (gameFrame % this.interval === 0) {
    this.newX = Math.random() * (canvas.width - this.width);
    this.newY = Math.random() * (canvas.height - this.height);
    }
    let dx = this.x - this.newX;
    let dy = this.y - this.newY;

    this.x -= dx/70;
    this.y -= dy/70;
    // Si el enemigo sale del canvas por la izquierda, lo colocamos en la derecha
    if (this.x + this.width < 0) this.x = canvas.width;
    // Actualizamos el frame del sprite del enemigo cada cierto número de frames
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }

  // Dibujamos al enemigo en el canvas
  draw() {
    // Dibujamos el sprite del enemigo en su posición actual
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
