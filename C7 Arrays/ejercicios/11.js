function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var arrayx2 = [];
for (var index = 0; index < array.length; index++) {
  var elemento = array[index] * 2;
  arrayx2.push(elemento);
}
  return arrayx2;
}
console.log(duplicarElementos([1, 2, 3]));
console.log(duplicarElementos([0, 4, 8]));
console.log(duplicarElementos([-1, -2, -3]));
console.log(duplicarElementos([]));
module.exports = duplicarElementos;