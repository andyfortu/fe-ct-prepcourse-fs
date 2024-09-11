function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  var multiplo = 0;
  for (var index = 0; index < secuencia.length; index++) {
    if (secuencia[index] % n == 0) {
      multiplo = secuencia[index];
      break;
    }
  }
  return multiplo;
}
const secuencia = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const n = 3;
const expected = 3;
const result = encontrarPrimerMultiploDeN(n, secuencia);
console.log(result);
module.exports = encontrarPrimerMultiploDeN;