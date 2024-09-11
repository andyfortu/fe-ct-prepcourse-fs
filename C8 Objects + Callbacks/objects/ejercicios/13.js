function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:
  delete objeto[propiedad];
  return objeto;
}


console.log(eliminarPropiedad({p1: 1, p2: 2, p3:3}, "p2"));
module.exports = eliminarPropiedad;
