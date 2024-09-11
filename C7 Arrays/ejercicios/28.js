function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
  var esArray = Array.isArray(arr);
  var respuesta = true;

  if (esArray == true && arr.length > 0) {
    respuesta = true;
  } else {
    respuesta = false;
  }
  
  return respuesta;
}
console.log(esArrayNoVacio([1, 2, 3]));
console.log(esArrayNoVacio([]));
console.log(esArrayNoVacio('not an array'));
module.exports = esArrayNoVacio;