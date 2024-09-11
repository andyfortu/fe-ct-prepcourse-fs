function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  var arreglo = [];
  var negativo = "Se interrumpió la ejecución";
  var sumaycantidadcoinciden = false;
        
  for (var index = 1; index <= 10; index++) {
    arreglo.push(num+index*2);
    if (index == (num+index*2)) {
      sumaycantidadcoinciden = true;
      break;
    }
  } 
  if (sumaycantidadcoinciden == true){
    return negativo;
  }
  else {
    return arreglo;
  }

}
console.log(breakStatement(50));
console.log(breakStatement(-4));
module.exports = breakStatement;
  // expect(breakStatement(50)).toEqual([52, 54, 56, 58, 60, 62, 64, 66, 68, 70]);
  // expect(breakStatement(-4)).toEqual('Se interrumpió la ejecución');