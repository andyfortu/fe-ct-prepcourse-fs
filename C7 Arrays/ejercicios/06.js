function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  return array.reverse();
}
console.log(invertirArray([1, 2, 3]));
console.log(invertirArray([]));
console.log(invertirArray([4]));
console.log(invertirArray([1, 'hola', true, null, undefined]));
module.exports = invertirArray;