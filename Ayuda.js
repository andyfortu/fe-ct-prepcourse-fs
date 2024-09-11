//Suma
console.log(3 + 5);

//Resta
console.log(14 - 7);

//Multiplicacion
console.log(8 * 6);

//Division
console.log(30 / 9);

//Resto
console.log(95 % 4);

//Prueba de precedencia
console.log(3 + 5 * 2 - 8);

//Operaciones de comparación
console.log (4 < 7); 
console.log (4 < 1 );
console.log (4 > 4); 
console.log (4 == 7);
//Igualdad vs igualdad estricta 
console.log (3 == 3); 
console.log (3 === 3); 
console.log (3 == "3"); 
console.log (3 === "3");
console.log (7 == "7");
console.log (7 === "7");
//Asignación y asociatividad
var a = 1;
var b = 2;
var c = a = b;
console.log (c); 

//Función: sumaTres
var sumaTres = (x) => {
  return x + 3;
}

//Función: cuidadoConElConsoleLog
function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
  }
//Precedencia de valores
var a = 1;
var b = 2;
var c = a = b;
console.log (c);

function viajar(destino) {
    if(destino === 'Brasil') {
             console.log('Gire a la izquierda');
    } else if(destino === 'Argentina') {
             console.log('Gire a la derecha');
    } else {
             console.log('Nos perdimos');''
    }
  };
  viajar('Brasil');
  viajar('Argentina');

  function puedeManejar(edad) {
    if(edad >= 18) {
             console.log( true );
    } 
    console.log( false );
  }
  
  puedeManejar(17);