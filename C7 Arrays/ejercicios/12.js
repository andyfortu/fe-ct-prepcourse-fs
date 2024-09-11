function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
var arrayMayus = [];
  for (var index = 0; index < array.length; index++) {
    var elemento = array[index].toUpperCase();
    arrayMayus.push(elemento);
  }
return arrayMayus;
}
console.log(convertirStringAMayusculas(["hola", "chau", "bai"]));
module.exports = convertirStringAMayusculas;