function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var resultado = 1;
  for (var index = a; index <= b; index++) {
    resultado = resultado * index;
  }
  return resultado;
}
console.log(productoEntreNúmeros(0,10));
module.exports = productoEntreNúmeros;