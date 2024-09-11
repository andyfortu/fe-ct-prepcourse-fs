function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  var resultado = 0;
for (var index = 1; index <= n; index++) {
  resultado = resultado + index;
}
return resultado;
}
console.log(sumarHastaN(3));
module.exports = sumarHastaN;