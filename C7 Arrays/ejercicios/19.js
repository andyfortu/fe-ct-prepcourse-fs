function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  var multiplicacion = 1;

  if (arguments.length == 0) {
    return 0;
  } else if (arguments.length == 1) {
    return arguments[0];
  } else {

  for (var index = 0; index < arguments.length; index++) {
    multiplicacion = multiplicacion * arguments[index];
    }
  return multiplicacion;
  }
}
console.log(multiplicarArgumentos(1, 2, 3));
module.exports = multiplicarArgumentos;