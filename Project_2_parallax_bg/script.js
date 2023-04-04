const canvas = document.getElementById("canvas1");
// Selecciona el elemento del HTML con el id "canvas1" y lo asigna a la constante "canvas".
const ctx = canvas.getContext("2d");
// Obtiene el contexto 2D del canvas seleccionado y lo asigna a la constante "ctx" (context).
const CANVAS_WIDTH = (canvas.width = 800);
// Establece el ancho del canvas en 800 píxeles y lo asigna a la constante "CANVAS_WIDTH".
const CANVAS_HEIGHT = (canvas.height = 700);
// Establece la altura del canvas en 700 píxeles y lo asigna a la constante "CANVAS_HEIGHT".

let gameSpeed = 5;

// IMAGES
const backgroundLayer1 = new Image();
backgroundLayer1.src = "./layer-1.png";
const backgroundLayer2 = new Image();
backgroundLayer2.src = "./layer-2.png";
const backgroundLayer3 = new Image();
backgroundLayer3.src = "./layer-3.png";
const backgroundLayer4 = new Image();
backgroundLayer4.src = "./layer-4.png";
const backgroundLayer5 = new Image();
backgroundLayer5.src = "./layer-5.png";


window.addEventListener("load", () => {
  const slider = document.getElementById("slider");
  slider.value = gameSpeed;
  const showGameSpeed = document.getElementById("showGameSpeed");
  showGameSpeed.innerHTML = gameSpeed;
  slider.addEventListener("change", (e) => {
    gameSpeed = e.target.value;
    showGameSpeed.innerHTML = gameSpeed;
  });

  class Layer {
    constructor(image, speedModifier) {
      // Establecer las propiedades de la capa
      this.x = 0;
      this.y = 0;
      this.width = 2400;
      this.height = 700;
      this.image = image;
      this.speedModifier = speedModifier;
      // Calcular la velocidad de la capa
      this.speed = gameSpeed * this.speedModifier;
    }
  
    update() {
      // Calcular la velocidad de la capa
      this.speed = gameSpeed * this.speedModifier;
      // Si la capa se mueve fuera de la pantalla, restablecer su posición
      if (this.x <= -this.width) {
        this.x = 0;
      }
      // Mover la capa
      this.x = this.x - this.speed;
      // También se puede usar la siguiente línea para mover la capa con una animación más suave
      //this.x = gameFrame * this.speed % this.width;
    }
  
    draw() {
      // Dibujar la capa
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      // Dibujar otra instancia de la capa a la derecha de la primera
      ctx.drawImage(
        this.image,
        this.x + this.width,
        this.y,
        this.width,
        this.height
      );
    }
  }


  const layer1 = new Layer(backgroundLayer1, 0.1);
  const layer2 = new Layer(backgroundLayer2, 0.3);
  const layer3 = new Layer(backgroundLayer3, 0.4);
  const layer4 = new Layer(backgroundLayer4, 0.6);
  const layer5 = new Layer(backgroundLayer5, 1);

  const gameObjects = [layer1, layer2, layer3, layer4, layer5];

  const animate = () => {
    // Se limpia el canvas.
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // Se actualiza y dibuja cada objeto del juego.
    gameObjects.forEach((object) => {
      object.update();
      object.draw();
    });
    // Se solicita una nueva animación frame para ejecutar la función "animate" de nuevo.
    requestAnimationFrame(animate);
  };
  animate();
});
