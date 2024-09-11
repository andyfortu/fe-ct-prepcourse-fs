function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
var promedio = 0;
for (var index = 0; index < resultadosTest.length; index++) {
  promedio += resultadosTest[index];  
}
return promedio / resultadosTest.length;
}
console.log(promedioResultadosTest([1, 2, 3]));
module.exports = promedioResultadosTest;