function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var arrayPar = [];
  for (var index = 0; index < array.length; index++) {
    var elemento = array[index];
    if (elemento % 2 == 0) {
      arrayPar.push(elemento);
    }
  }
  return arrayPar;
}
console.log(filtrarNumerosPares([1,2,3,4,5,6]));
module.exports = filtrarNumerosPares;