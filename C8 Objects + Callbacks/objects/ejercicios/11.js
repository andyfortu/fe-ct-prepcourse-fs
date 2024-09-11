function invocarMetodo(objeto, metodo) {
  // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
  // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
  // NOTA: no necesitas retornar nada.
  // Tu código:
  
  // esta es la forma correcta que respeta lo que viene por parametro en la variable metodo
  objeto[metodo]();

  /// LO QUE SIGUE ES EXPLICACIÓN - ESTÁ POR FUERA DEL EJERCICIO
  /// si no estuviera el parametro metodo la forma seria:
  
  if (metodo == "metodo") { 
     //para caso 1 
     console.log("anexo caso 1");
    objeto.metodo();
  }
  else {
    //para caso 2
    console.log("anexo caso 2");
    objeto.saludar();
  }
     
}

///// esto es lo que habíamos hecho originalmente y es incorrecto aunque se ejecutaba y no entendíamos porque, tratá de entender porque
// function miFuncion() {
//   console.log("Hola, existo");
// }
// var miObjeto = {metodo: miFuncion(), cosa: 1, cosa2: "b"};



////////// caso 1
var miObjeto = {metodo: function() {console.log("Hola, existo");}, cosa: 1, cosa2: "b"};
invocarMetodo(miObjeto, "metodo");


//////// caso 2 - este ejemplo es mas 

var Persona = {nombre: "Juan", apellido: "Perez", saludar: function() {console.log("Hola! " + this.apellido + " " + this.nombre);}};
invocarMetodo(Persona, "saludar");


module.exports = invocarMetodo;