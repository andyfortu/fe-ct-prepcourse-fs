function crearGato(nombre, edad) {
  // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
  // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
  // Además, agregar una propiedad con el nombre "meow".
  // La propiedad "meow" será una función que retorne el string: "Meow!".
  // Retornar el objeto.
  // Tu código:
  
  var gato = {};
  gato["nombre"] = nombre;
  gato["edad"] = edad;
  gato["meow"] = retornarMeow();

  // var gato = new Object();
  // gato.nombre = 'Pichi';
  // gato.edad = 2; 

  return gato;
}

function retornarMeow() {
  return "Meow! dame comida";
}

console.log(crearGato("Papi", 2));
module.exports = crearGato;