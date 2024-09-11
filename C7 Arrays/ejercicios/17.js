function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
var suma = 0;
for (var index = 0; index < arrayOfNums.length; index++) {
  suma += arrayOfNums[index];  
  // suma = suma + arrayOfNums[index];
}
return suma;
}
console.log(agregarNumeros([1,2,3]));
module.exports = agregarNumeros;