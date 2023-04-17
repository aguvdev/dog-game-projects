// Creamos dos objetos que representan círculos con sus coordenadas (x, y) y su radio
const circle1 = { x: 10, y: 10, radius: 300 };
const circle2 = { x: 500, y: 500, radius: 150 };

// Calculamos la distancia entre los dos círculos utilizando el teorema de Pitágoras
let dx = circle2.x - circle1.x;
let dy = circle2.y - circle1.y;
let distance = Math.sqrt(dx * dx + dy * dy);

// Calculamos la suma de los radios de los dos círculos
let sumOfRadii = circle1.radius + circle2.radius;

// Comprobamos si los dos círculos se superponen, están en contacto o no hay colisión
if (distance < sumOfRadii) {
  // Los círculos se superponen, hay colisión
  //circles collide
} else if (distance === sumOfRadii) {
  // Los círculos están en contacto, pero no se superponen
  // circles are touching
} else if (distance > sumOfRadii) {
  // Los círculos no se tocan, no hay colisión
  // no collision
}

/* En primer lugar, se crean dos objetos llamados "circle1" y "circle2" que representan dos círculos en un plano cartesiano. Cada objeto tiene las propiedades "x" e "y", que representan las coordenadas del centro del círculo, y "radius", que representa el radio del círculo.

A continuación, se calcula la distancia entre los dos círculos utilizando el teorema de Pitágoras. Se obtiene la diferencia en la coordenada "x" y en la coordenada "y" entre los dos círculos, y se utiliza la fórmula "Math.sqrt(dx * dx + dy * dy)" para calcular la distancia entre ellos.

Luego, se calcula la suma de los radios de los dos círculos y se compara con la distancia entre ellos. Si la distancia es menor que la suma de los radios, significa que los círculos se superponen y hay colisión. Si la distancia es igual a la suma de los radios, significa que los círculos están en contacto, pero no se superponen. Y si la distancia es mayor que la suma de los radios, significa que los círculos no se tocan y no hay colisión. */