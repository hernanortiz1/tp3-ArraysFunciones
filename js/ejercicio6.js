/*
Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
luego crear una función para calcular su perímetro y mostrarlo por pantalla.
● La fórmula del perímetro es p = 2*(a +b)
*/

function perimetro(base, altura) {
  const resultado = 2 * (base + altura);
  return resultado;
}

do {
  const base = prompt("ingrese base");
  const altura = prompt("ingrese altura");
  if (base !== null && altura !== null && !isNaN(base) && !isNaN(altura)) {
    const base1 = parseInt(base);
    const altura1 = parseInt(altura);
    document.writeln(`Perimetro ${perimetro(base1, altura1)}`);
  }
} while (confirm("¿Agregar más datos?"));
