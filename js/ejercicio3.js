/*
- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la
función Math.random para obtener números aleatorios entre 1 y 6 para cada uno
de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y
anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces
esta operación.
*/

const apariciones = [];
for (let i = 0; i < 50; i++) {
  let suma = 0;
  let dado1 = Math.floor(Math.random() * 5) + 1;
  let dado2 = Math.floor(Math.random() * 5) + 1;
  console.log(dado1);
  console.log(dado2);
  suma += dado1 + dado2;

  apariciones.push(suma);
}

document.writeln(`Datos del array`);
document.writeln(`<ul>`);
for(let i=0; i < apariciones.length; i++){
    document.writeln(`<li>suma ${apariciones[i]} apariciones</li>`); 
}
document.writeln(`</ul>`);
