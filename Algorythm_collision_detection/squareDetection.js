// Definimos dos objetos rectangulares con sus propiedades de posición y tamaño
var rect1 = { x: 5, y: 5, width: 50, height: 50 };
var rect2 = { x: 20, y: 10, width: 10, height: 10 };

// Comprobamos si los dos rectángulos no se solapan en ningún punto
if (
  rect1.x > rect2.x + rect2.width ||
  rect1.x + rect1.width < rect2.x ||
  rect1.y > rect2.y + rect2.height ||
  rect1.y + rect1.height < rect2.y
) {
  // Si no hay colisión, no hacemos nada
  // no collision
} else {
  // Si hay colisión, ejecutamos este bloque de código
  // collision detected
}

/* El código define dos objetos rectangulares, cada uno con propiedades de posición (x, y) y tamaño (width, height). Después, se comprueba si estos dos rectángulos se solapan en algún punto. Si no hay solapamiento, el programa no hace nada y si hay colisión, se ejecuta un bloque de código específico.

Para determinar si hay colisión, se comprueba si cualquiera de las cuatro esquinas de rect1 está fuera de las cuatro esquinas de rect2. Si cualquiera de estas condiciones se cumple, no hay colisión. Si no se cumple ninguna de estas condiciones, hay colisión y se ejecuta el bloque de código "collision detected".

Este código es muy útil en los videojuegos o aplicaciones que involucran objetos que colisionan entre sí, ya que permite detectar colisiones y tomar acciones específicas en consecuencia. */