function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  return objeto.hasOwnProperty(propiedad);
}

var persona = {nombre: "Andrea", apellido: "Fortu", email: null };
console.log(tienePropiedad(persona, "nombres"));
module.exports = tienePropiedad;
