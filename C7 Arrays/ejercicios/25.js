function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  var arrayPares = 0;

  for (var index = 0; index < numeros.length; index++) {
    if (numeros[index] % 2 !== 0) {
      continue;
    }
    arrayPares++;
  }
  return arrayPares;
}
console.log(contarParesConContinue([]));
console.log(contarParesConContinue([1, 3, 5]));
console.log(contarParesConContinue([1, 2, 3, 4, 5, 6]));
console.log(contarParesConContinue([2, 4, 6, 8]));
module.exports = contarParesConContinue;