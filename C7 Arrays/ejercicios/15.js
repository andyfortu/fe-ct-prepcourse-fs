function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
var indiceMayor = 0;
var numMayor = 0;
if (array.length > 0)
  {
    numMayor = array[0];
  }

for (var index = 0; index < array.length; index++) {
  if (array[index] > numMayor) {
    numMayor = array[index];
    indiceMayor = index;
  }
}
return indiceMayor;
}
console.log(encontrarIndiceMayor([1, 2, 3, 4, 5]));
console.log(encontrarIndiceMayor([5, 4, 3, 2, 1]));
console.log(encontrarIndiceMayor([1, 3, 2, 5, 4]));
console.log(encontrarIndiceMayor([-1, -2, -3, -4, -5]));
console.log(encontrarIndiceMayor([-5, -4, -3, -2, -1]));
console.log(encontrarIndiceMayor([-1, -3, -2, -5, -4]));
console.log(encontrarIndiceMayor([]));
console.log(encontrarIndiceMayor([42]));
module.exports = encontrarIndiceMayor;