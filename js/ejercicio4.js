/*
Escribir el código de una función a la que se pasa como parámetro un número
entero y devuelve como resultado una cadena de texto que indica si el número es
par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/

function parInpar(numero) {
  if (numero % 2 == 0) {
    document.writeln(`<p>El número ${numero} es par</p>`);
  } else {
    document.writeln(`<p>El número ${numero} es impar</p>`);
  }
}

do {
  const entrada = prompt("ingrese número (cancelar para terminar");
  if (entrada === null) break;

  const numero = parseInt(entrada);
  if (!isNaN(entrada)) {
    parInpar(numero);
  } else {
    document.writeln("<p>Ingrese dato valido</p>");
  }
} while (true);
