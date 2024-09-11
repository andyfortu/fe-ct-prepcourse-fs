function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  var stringFinal = "";

  for (var index = 0; index < palabras.length; index++) {
    stringFinal = stringFinal + " " + palabras[index];
    
  }
  return stringFinal;
}
console.log(dePalabrasAFrase(['Henry', 'JavaScript', 'Class']));
console.log(dePalabrasAFrase(['Henry']));
module.exports = dePalabrasAFrase;