function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:

var i = 0;
do { num = num + 5;
  i = i + 1;
} while (i < 8);

return num;
}
// for (var index = 0; index < 8; index++) {
//   num = num + 5;  
// }
// return num;
// }

console.log(doWhile(5));
console.log(doWhile(-1));
console.log(doWhile(100));
module.exports = doWhile;