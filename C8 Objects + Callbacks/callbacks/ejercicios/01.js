function invocarCallback(funcionParametro) {
   // Invoca/ejecuta el callback `cb`.
   // NOTA: no debes retornar nada.
   // Tu código:
   return funcionParametro();
}

function EstaEsUnFuncionCallBack() {
   return "Hola";
}

console.log(invocarCallback(EstaEsUnFuncionCallBack));

module.exports = invocarCallback;