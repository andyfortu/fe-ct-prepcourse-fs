function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código:
var ultimo = array[array.length-1];
return ultimo;
}
console.log(devolverUltimoElemento([10, 10, 16, 12]));
console.log(devolverUltimoElemento([97, 100, 80, 55, 72, 94]));
console.log(devolverUltimoElemento(['hi', 'there', 'how', 'are', 'you', 'doing?']));
module.exports = devolverUltimoElemento;