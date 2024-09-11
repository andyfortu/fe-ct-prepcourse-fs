function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
var tabla6 = [];

// for (var index = 0; index <= 10; index++) {
//   tabla6.push(index*6);
// }

for (var index = 0; index <= 60; index+=6) {
  tabla6.push(index);
}
return tabla6;
}
console.log(tablaDelSeis());
module.exports = tablaDelSeis;