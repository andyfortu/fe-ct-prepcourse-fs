function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  var potencia = 0;
  var i = 0;

  while(potencia < numero)
  {
    potencia = 2**i;
    i++;
  }
 
  if (potencia == numero)
    return true;
  else
    return false;
}

console.log(esPotenciaDeDos(2));
console.log(esPotenciaDeDos(4));
console.log(esPotenciaDeDos(8));
console.log(esPotenciaDeDos(16));
console.log(esPotenciaDeDos(32));
console.log(esPotenciaDeDos(3));
console.log(esPotenciaDeDos(10));
console.log(esPotenciaDeDos(15));
console.log(esPotenciaDeDos(25));
console.log(esPotenciaDeDos(100));

module.exports = esPotenciaDeDos;