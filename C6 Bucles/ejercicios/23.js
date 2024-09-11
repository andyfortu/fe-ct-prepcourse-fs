function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  var resto = 1;
  var i = 2;

  while(resto !== 0 && i < numero)
  {
    resto = numero % i;
    //console.log("Resto " + resto + " / i: " + i);
    i++;
  }
 
  if (resto == 0)
    return false;
  else
    return true;
}
console.log(esNumeroPrimo(2));
console.log(esNumeroPrimo(3));
console.log(esNumeroPrimo(4));
console.log(esNumeroPrimo(5));
console.log(esNumeroPrimo(6));
console.log(esNumeroPrimo(7));
console.log(esNumeroPrimo(8));
console.log(esNumeroPrimo(9));
console.log(esNumeroPrimo(10));
console.log(esNumeroPrimo(11));
module.exports = esNumeroPrimo;