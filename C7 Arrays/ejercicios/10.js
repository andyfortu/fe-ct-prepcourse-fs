function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
for (var index = 0; index < array.length; index++) {
  var largoElemento = array[index].length;
  if ( largoElemento >= 5) {
    return array[index];
  }
 }
}
console.log(obtenerPrimerStringLargo(['hello', 'world', 'this', 'is', 'a', 'test']));
console.log(obtenerPrimerStringLargo(['this','is','a','test','with','a','long','string',]));
console.log(obtenerPrimerStringLargo(['hi', 'thr', 'how', 'are', 'you']));
console.log(obtenerPrimerStringLargo(['this', 'is', 'a', 'test']));
module.exports = obtenerPrimerStringLargo;