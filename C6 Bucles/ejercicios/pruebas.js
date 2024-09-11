// for (var index = 1; index <= 3; index++) {
//     console.log("Este es mi valor" + " " + index);
//   }  

//   index = 0;
// while (index < 3) {
//   index++;
//   console.log("Este es mi valor "  + index);
// }

// index = 5;
// while (index <= 3) {
//   console.log("Este es mi valor "  + index);
//   index++;
// }

// index = 5;
// do {
//   console.log("Este es mi valor abajo "  + index);
//   index++;
// } while (index <= 3);

// var milista = [1, 2, 3, 4, 5];
// console.log(milista.length);

// var palabra = "hola";
// console.log(palabra.toUpperCase());

// var Contador = 0;
// var Contador2 = 25;

// for (let index = 0; index < 15; index++) {
//     Contador++;
//     Contador2++;
// }
// console.log(Contador, Contador2);

// var array = [1, 2, 3, 4];
// console.log(array.suma);

// 1) var obj = {a: 1, b: 2, c: 3};
// var array = Object.keys(obj).map(function (key){
//     return obj[key];
//     // console.log(obj[key]);
// });
// console.log(array);

// 2) var lista = ["a", "b", "c", "d"];
// lista
//     .slice(1, 3)
//     .forEach(function(e){
//         console.log(e)
//     });

// 3) var eliminados = 0;
// var arr = [1, 2, 3, 4, 5];
// eliminados = arr.splice(1,2);
// console.log(eliminados);
// console.log(arr);

// 4) var numeros = [1, 2, 3];
// numeros[10] = 11;

// var suma = numeros.reduce(function (a, b) {
//     return a + b
// });
// console.log(suma);
// console.log(numeros);

// 10) for (var i = 10; i > 4; i--) {
//     console.log(i);
// }

// function foo(obj, propiedad) {
//     delete obj[propiedad];
//     return obj;
// }
// var resultado = foo({a: 1, b: 2}, "b")
// console.log(resultado);

// function foo(obj) {
//     var contador = 0;
//     for (var key in obj) {
//         contador++
//     }
//     return contador;
// }
// var resultado = foo({a: 1, b: 2, c: 3})
// console.log(resultado);

// 26) console.log([1, 2, 3, 4, 5, 6, 7].slice(-3));

// console.log(saludar());  // Funciona gracias al hoisting (declarada)
// function saludar() {
//   return "Hola";
// }

// console.log(saludar());  // Da error: saludar no está definida todavía (expresada)
// var saludar = function() {
//   return "Hola";
// };

// 30) function prueba() {
//     console.log(mensaje);
//     var mensaje = "keonda";
// }
// prueba();

// 34) console.log(!!"texto");
// console.log(!"texto");

// var cosa = { a: 1};
// console.log("a");

// var arr = [1, 2, 3];
// delete arr[1];
// console.log(arr[1]);

// if ("0") {
//     console.log("veradero")
// } else {
//     console.log("falso");
// }

// var x = 5;

// do {
//     x--;
// } while (x>2);
// console.log(x);

// var x= 'Hola '
// console.log(x+"chau");

// var x = 1;
// x = x++ + 1;
// console.log(x);

// console.log("10" - 5 + "5");

// var resultado = ( 4 >= 4) || (3<2);
// console.log(false || true && false);

// console.log(typeof("hola"));

// var obj = {a:1, b:2, c:3};
// var arr = Object.keys(obj).map(function (key) {return obj[key]});
// console.log(arr);

// // TEST 2
// // 1)
// var objetos = [{a:7, b:2, c:4}];
// var total = objetos.reduce(function(acum, obj){
//     return acum + Object.values(obj)[0]      
// }, 0);
// console.log(total);     

// // // 2) 
// var obj = {clave: "valor", otro: "dato"};
// console.log(obj["clave"]);

// var array = [1,2,3];
// delete array[1];
// console.log(array[1]);

// for (let index = 0; index <=5; index++) {
//     if (index % 2 === 0){console.log(index);};
// }

// if ("0") {console.log("v");} else {console.log("f");}

// myvar = true;
// array = [2,4,6,8];
// for (let index = 0; index < array.length; index++) {
//     if (array[index] % 2 !== 0){myvar = false; break;};
// }
// console.log(myvar);

// var x = 5;
// do {
//     x--;
// } while (x>2);
// console.log(x);

// console.log([1,2,3,4,5,6,7].slice(-3));


// console.log(false || true && false);

var contar = 5;
contar = contar++ +1;
console.log(contar);