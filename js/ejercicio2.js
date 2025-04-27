/*
Crear un script que solicite al usuario mediante un prompt el nombre de
ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se
debe mostrar el arreglo generado, luego realizar las siguientes acciones:
● Mostrar la longitud del arreglo.
● Mostrar en el documento web los ítems de las posiciones primera, tercera y
última.
● Añade en última posición la ciudad de París.
● Escribe por pantalla el elemento que ocupa la segunda posición.
● Sustituye el elemento que ocupa la segunda posición por la ciudad de
'Barcelona'.
*/

const ciudades = [];
let entrada;
do {
  entrada = prompt("Ingrese ciudades (cancelar para terminar)");
  if (entrada !== null) {
    ciudades.push(entrada);
  }
} while (entrada !== null);

ciudades.splice(1, 1, "Barcelona");
ciudades.push("Paris");
document.writeln(`<p>Longitud de array: ${ciudades.length} </p>`);
document.writeln(`<p>item en primera posición: ${ciudades[0]} </p>`);
document.writeln(`<p>item en tercera posición: ${ciudades[2]} </p>`);
document.writeln(
  `<p>item en ultima posición: ${ciudades[ciudades.length - 1]} </p>`
);

document.writeln(`Datos del array`);
document.writeln(`<ul>`);
for (let i = 0; i < ciudades.length; i++) {
  document.writeln(`<li>${ciudades[i]} </li>`);
}
document.writeln(`</ul>`);
