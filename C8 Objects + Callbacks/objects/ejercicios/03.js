const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:
  objeto[propiedad] = valor;
  return objeto;
}

var persona = { nombre: "Pepe", edad: 18 };
console.log(agregarNuevaPropiedad(persona, "genero", "masculino"));

module.exports = agregarNuevaPropiedad;