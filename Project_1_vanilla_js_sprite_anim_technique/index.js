let playerState = 'idle';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e){
    playerState = e.target.value;
})

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');// El método getContext() del objeto canvas para obtener el contexto 2D del canvas y lo almacena en una variable llamada "ctx". El contexto 2D del canvas es un objeto que proporciona métodos para dibujar y manipular gráficos en el canvas, como líneas, formas y texto. Con esta variable "ctx", se pueden dibujar gráficos en el canvas utilizando métodos como fillRect(), strokeRect(), beginPath() y otros.
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = './shadow_dog.png';//Tamaños: x: 6876px (12 filas), y: 5230px (10 columnas).
const spriteWidth = 575;// x/filas = 6876/12;
const spriteHeight = 523;// y/columnas = 5230/10;

let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'getHit',
        frames: 4,
    },
];

// Iteramos sobre un array de estados de animación
animationStates.forEach((state, index) => {
    // Creamos un objeto para almacenar los frames de la animación actual
    let frames = {
        loc: [], // Un array para almacenar las coordenadas de los frames en la imagen
    }
    // Iteramos por el número de frames que tiene el estado actual
    for (let j = 0; j < state.frames; j++) {
        // Calculamos las coordenadas de la posición del frame actual en la imagen
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        // Añadimos las coordenadas del frame al array de coordenadas
        frames.loc.push({x: positionX, y:positionY});
    }
    // Añadimos el objeto de frames al objeto de animaciones con el nombre del estado actual
    spriteAnimations[state.name] = frames;
});


console.log(spriteAnimations);
// FUNCTIONS

function animate() {//La función "animate()" anima un rectángulo en una posición específica del canvas utilizando el contexto 2D del canvas.

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);//En cada fotograma, se utiliza el método "clearRect()" para borrar todo el canvas.
    
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    // gameFrame/staggerFrames = ???
    // 0/5 = 0; Math.floor(0) = 0; position = 0%6=0;
    // 1/5 = 0.2; Math.floor(0.2) = 0; position = 0%6=0;
    // 2/5 = 0.4; Math.floor(0.4) = 0; position = 0%6=0;
    // 3/5 = 0.6; Math.floor(0.6) = 0; position = 0%6=0;
    // 4/5 = 0.8; Math.floor(0.8) = 0; position = 0%6=0;
    // 5/5 = 1; Math.floor(1) = 1; position = 1%6=1;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;


    ctx.drawImage(// En esta línea de código, utilizando el método "drawImage()" del contexto 2D del canvas, se dibuja una imagen en el canvas.
        playerImage,// El primer parámetro de la función es la imagen que se va a dibujar, en este caso es "playerImage".
        // Los siguientes cuatro parámetros indican qué parte de la imagen se debe dibujar,
        // comenzando en las coordenadas de la imagen
        frameX,// coordenadas horizontales
        frameY,// coordenadas verticales
        spriteWidth, spriteHeight,// y dibujando un rectángulo de ancho "spriteWidth" y alto "spriteHeight".
        // Los siguientes dos parámetros especifican las coordenadas en el canvas donde se debe dibujar la imagen,
        0, 0,// comenzando en (0,0).
        spriteWidth, spriteHeight// Finalmente, los últimos dos parámetros indican el ancho y el alto del rectángulo que se debe dibujar en el canvas.
    );

    if (gameFrame % staggerFrames == 0){
        if (frameX < 6) frameX++;
        else frameX = 0;
    }// Si el módulo de "gameFrame" dividido por "staggerFrames" es igual a cero, entonces se ejecuta el siguiente bloque de código. Este bloque verifica si "frameX" es menor que 6. Si es así, se incrementa en uno, de lo contrario se establece en cero.

    gameFrame++;
    requestAnimationFrame(animate);//Para actualizar la animación en cada fotograma, se utiliza el método "requestAnimationFrame()" de la ventana del navegador.
}

animate();