function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
var nuevoArray = [];  
for (var index = 0; index < array.length; index++) {
  var elemento = array[index]*index;
  nuevoArray.push(elemento);
}
return nuevoArray;
}
console.log(multiplicarElementosPorIndice([1,2,3]));
module.exports = multiplicarElementosPorIndice;