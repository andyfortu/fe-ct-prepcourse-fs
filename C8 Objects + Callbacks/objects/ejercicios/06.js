const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var contador = 0;

  for (var prop in objeto) {
    contador++;
    }
    return contador;
   
 };
var persona = { nombre: "Pepe", edad: 18, genero: "masculino", altura: 1.80, peso: 80, masa: 15 };
console.log(contarPropiedades(persona));
console.log(Object.keys(persona).length);
module.exports = contarPropiedades;