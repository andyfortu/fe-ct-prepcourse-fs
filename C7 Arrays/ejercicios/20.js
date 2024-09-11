function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
var respuesta = true;
for (var index = 0; index < array.length-1; index++) {
  if (array[index] !== array[index+1]) {
    respuesta = false;
    break;
  }   
}
return respuesta;
}
console.log(todosIguales(["20", 20, 20, 20]));
console.log(todosIguales([230, 230, 230, 230]));
console.log(todosIguales([97, 100, 190, 190]));
module.exports = todosIguales;