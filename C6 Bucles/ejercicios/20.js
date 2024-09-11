function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   var resultado = 0;
   for (var index = 1; index <= n; index++) {
      if (resultado > 100) {
         break;
      } resultado = resultado + index;
   }
   return resultado;
}
console.log(sumarHastaNConBreak(3));
console.log(sumarHastaNConBreak(5));
console.log(sumarHastaNConBreak(7));
console.log(sumarHastaNConBreak(10));
console.log(sumarHastaNConBreak(15));
console.log(sumarHastaNConBreak(20));
console.log(sumarHastaNConBreak(50));
console.log(sumarHastaNConBreak(13));
module.exports = sumarHastaNConBreak;