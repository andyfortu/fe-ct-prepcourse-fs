function agregarPropiedad(objeto, propiedad) {
  // Recibirás un objeto por parámetro.
  // Debes agregarle una propiedad con el nombre recibido por parámetro.
  // Esta propiedad será igual al valor `null`.
  // Retornar el objeto.
  // Tu código:
  objeto[propiedad] = null;
  return objeto;
}

var objeto = {nombre: "pepe", edad: 33};
console.log(agregarPropiedad(objeto, "nacionalidad"));
console.log(agregarPropiedad({categoria: "congelados", unidad: "peso"}, "precio"));
module.exports = agregarPropiedad;