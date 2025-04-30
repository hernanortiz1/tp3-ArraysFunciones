/*
Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la
función Math.random para obtener números aleatorios entre 1 y 6 para cada uno
de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y
anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces
esta operación.
*/

const apariciones = [];
const suma = [];
let contador2 = 0,
  contador3 = 0,
  contador4 = 0,
  contador5 = 0,
  contador6 = 0,
  contador7 = 0,
  contador8 = 0,
  contador9 = 0,
  contador10 = 0,
  contador11 = 0,
  contador12 = 0;
for (let i = 0; i < 50; i++) {
  let sumar = 0;
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;
  sumar += dado1 + dado2;

  suma.push(sumar);
  console.log(sumar);

  if (suma[i] === 2) {
    contador2++;
    apariciones[2] = contador2;
  } else if (suma[i] === 3) {
    contador3++;
    apariciones[3] = contador3;
  } else if (suma[i] === 4) {
    contador4++;
    apariciones[4] = contador4;
  } else if (suma[i] === 5) {
    contador5++;
    apariciones[5] = contador5;
  } else if (suma[i] === 6) {
    contador6++;
    apariciones[6] = contador6;
  } else if (suma[i] === 7) {
    contador7++;
    apariciones[7] = contador7;
  } else if (suma[i] === 8) {
    contador8++;
    apariciones[8] = contador8;
  } else if (suma[i] === 9) {
    contador9++;
    apariciones[9] = contador9;
  } else if (suma[i] === 10) {
    contador10++;
    apariciones[10] = contador10;
  } else if (suma[i] === 11) {
    contador11++;
    apariciones[11] = contador11;
  } else if (suma[i] === 12) {
    contador12++;
    apariciones[12] = contador12;
  }
}
document.writeln("<table border='2' cellpadding='3'>");
document.writeln("<th>Suma</th>");
document.writeln("<th>Apariciones</th>");
document.writeln("</tr>");
for (let i = 2; i <= 12; i++) {
  document.writeln("<tr>");
  document.writeln(`<td>${i}</td>`);
  document.writeln(`<td>${apariciones[i] || 0}</td>`);
  document.writeln("</tr>");
}
document.writeln("</table>");
