function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   var indice = array.indexOf(num);
   return indice;
}
console.log(encontrarElemento(2, [1, 2, 3]));
console.log(encontrarElemento(4, [1, 2, 3]));
console.log(encontrarElemento(1, []));
console.log(encontrarElemento(1, [1]));
console.log(encontrarElemento(2, [2, 2, 2]));
module.exports = encontrarElemento;