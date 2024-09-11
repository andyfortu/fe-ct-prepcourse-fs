const listarPropiedades = (objeto) => {
  // Lista y retorna todas las propiedades que posee el objeto recibido por la función.
  // PISTA: Puedes usar el método Object.keys().
  // Tu código:
  return Object.keys(objeto);
};
var persona = { nombre: "Pepe", edad: 18, genero: "masculino" };
console.log(listarPropiedades(persona));

module.exports = listarPropiedades;