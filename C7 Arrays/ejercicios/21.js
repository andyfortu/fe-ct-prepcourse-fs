function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var nuevoArray = [];

for (var index = 0; index < array.length; index++) {
  if (array[index] == "Enero" || array[index] == "Marzo" || array[index] == "Noviembre") {
    nuevoArray.push(array[index]);
  }
}
if (nuevoArray.length == 3) { 
  return nuevoArray;
} else {
  return "No se encontraron los meses pedidos";
}
}
var ok = [
  'Marzo',
  'Diciembre',
  'Abril',
  'Junio',
  'Julio',
  'Noviembre',
  'Enero',
  'Mayo',
  'Febrero',
];
var notOk = ['Marzo', 'Diciembre', 'Julio', 'Noviembre'];
console.log(mesesDelAño(ok));
console.log(mesesDelAño(notOk));
module.exports = mesesDelAño;