function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:
  var nuevoObjeto = {};
  nuevoObjeto["nombre"] = nombre;
  nuevoObjeto["email"] = email;
  nuevoObjeto["password"] = password;
  return nuevoObjeto;
}
console.log(nuevoUsuario("agustina", "pesce.agus@gmail.com", "agus123"));
module.exports = nuevoUsuario;