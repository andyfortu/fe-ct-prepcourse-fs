function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
var contador = 0;
for (var index = 0; index < array.length; index++) {
    if (array[index] > 10) {
      contador++;
    } 
}
return contador;
}
console.log(contarElementosMayoresA10([1, 2, 3, 4, 5]));
console.log(contarElementosMayoresA10([10, 20, 30, 40, 50]));
console.log(contarElementosMayoresA10([11, 12, 13, 14, 15]));
console.log(contarElementosMayoresA10([-1, 0, 1, 2, 3]));
console.log(contarElementosMayoresA10([]));
module.exports = contarElementosMayoresA10;