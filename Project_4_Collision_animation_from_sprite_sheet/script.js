/** @type {HTMLCanvasElement} */

// Obtenemos el canvas y el contexto 2D
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

// Establecemos el tamaño del canvas
canvas.width = 500;
canvas.height = 700;

// Creamos un array vacío para almacenar las explosiones
const explotions = [];

// Obtenemos la posición del canvas en el viewport
let canvasPosition = canvas.getBoundingClientRect();

// Función para actualizar la posición del canvas en el viewport
const updateCanvasPosition = () => {
  canvasPosition = canvas.getBoundingClientRect();
};

// Clase para crear objetos de explosión
class Explosion {
  constructor(x, y) {
    // Definimos las propiedades del objeto
    this.spriteWidth = 200;
    this.spriteHeight = 179;
    this.width = this.spriteWidth * 0.7;
    this.height = this.spriteHeight * 0.7;
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = "./boom.png";
    this.frame = 0;
    this.timer = 0;
    this.angle = Math.random() * 6.2;
    this.sound = new Audio();
    this.sound.src = "./boom.wav";
  }
  // Método para actualizar la explosión
  update() {
    if (this.frame === 0) this.sound.play();
    this.timer++;
    if (this.timer % 10 === 0) {
      this.frame++;
    }
  }
  // Método para dibujar la explosión
  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.drawImage(
      this.image,
      this.spriteWidth * this.frame,
      0,
      this.spriteWidth,
      this.spriteHeight,
      0 - this.width * 0.5,
      0 - this.height * 0.5,
      this.width,
      this.height
    );
    ctx.restore();
  }
}

// Evento para actualizar la posición del canvas en el viewport al cambiar el tamaño de la ventana
window.addEventListener("resize", () => {
  updateCanvasPosition();
});

// Evento para crear una explosión al hacer clic en el canvas
window.addEventListener("click", (e) => {
  createAnimation(e);
});

// Función para crear una explosión
const createAnimation = (e) => {
  updateCanvasPosition();
  let positionX = e.x - canvasPosition.left;
  let positionY = e.y - canvasPosition.top;
  explotions.push(new Explosion(positionX, positionY));
};

// Función para animar las explosiones
const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < explotions.length; i++) {
    explotions[i].update();
    explotions[i].draw();
    if (explotions[i].frame > 5) {
      explotions.splice(i, 1);
      i--;
    }
  }
  requestAnimationFrame(animate);
};

// Llamamos a la función animate para iniciar la animación
animate();
