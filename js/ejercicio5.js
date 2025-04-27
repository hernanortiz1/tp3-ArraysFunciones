/*
Definir una función que muestre información sobre una cadena de texto que se
le pasa como argumento. A partir de la cadena que se le pasa, la función
determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o
por una mezcla de ambas.
*/

function cadenaTexto(frase) {
  if (frase === frase.toUpperCase()) {
    document.writeln(
      `<p>Frase ingresada ${frase} formada solo por MAYUSCULAS</p>`
    );
  } else if (frase === frase.toLowerCase()) {
    document.writeln(
      `<p>Frase  ingresada ${frase} formada solo por minusculas</p>`
    );
  } else {
    document.writeln(
      `<p>Frase ingresada ${frase} formada por MAYUSCULAS y minusculas</p>`
    );
  }
}

do {
  const texto = prompt("agregue una frase");
  if (texto !== null && isNaN(texto)) {
    cadenaTexto(texto);
  } else {
    alert("Ingrese solo texto");
  }
} while (confirm("¿Agregar otras frase?"));
