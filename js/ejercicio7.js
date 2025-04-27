/*
Escriba un script que muestre la tabla de multiplicar de un número ingresado
por pantalla, la creación de la tabla debe ser realizada con una función y mostrar
solo los resultados del 1 al 10 del número elegido por el usuario.
*/

function tablaMultiplicar(numero) {
  document.writeln(`<h3>Tabla de multiplicar del ${numero}</h3>`);
  for (let i = 1; i <= 10; i++) {
    document.writeln(`<p>${numero} x ${i} = ${numero * i}</p>`);
  }
}

do {
  const entrada = prompt("ingrese número");
  if (entrada !== null && !isNaN(entrada)) {
    const entrada1 = parseInt(entrada);
    tablaMultiplicar(entrada);
  }
} while (confirm("¿Ingresar otro número?"));
