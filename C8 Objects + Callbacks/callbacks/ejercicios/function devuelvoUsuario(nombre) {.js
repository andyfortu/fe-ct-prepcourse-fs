function devuelvoUsuario(nombre) {
   return nombre;
}
function devuelvoSaludo() {
   return 'Hola';
}
function saludar(cb1(nombre), cb2) {
   return cb1(nombre) + ' ' + cb2();
}
var resultado = saludar(devuelvoSaludo("pepe"), devuelvoUsuario);
console.log(resultado);