function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  // Tu código:
  return objetoMisterioso["numeroMisterioso"]*5;
}
objeto = {numeroMisterioso: 10, numerito: 20};
console.log(multiplicarNumeroDesconocidoPorCinco(objeto));
module.exports = multiplicarNumeroDesconocidoPorCinco;