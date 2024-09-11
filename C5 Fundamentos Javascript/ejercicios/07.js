function esTipoDato(x) {
  // La función recibe un argumento llamado valor.
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  return typeof x;
}

var resultado = esTipoDato(8);
console.log(resultado);

module.exports = esTipoDato;