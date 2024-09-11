const obtenerValorPropiedad = (objeto, propiedad) => {
   // Recibe un objeto y el nombre de una propiedad.
   // Devuelve el valor de esta propiedad.
   // Tu código:

   const a = objeto[propiedad];
   
   // // var a = "hola";
   // // var b = a;
   // // b = "Que tal";


   // var objArray=[];

   //  var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true, esUniversitario: false  } };
   //  objArray.push(persona);
   //  persona = { nombre: 'Lucardo', edad: 26, estudios: { esProgramador: true, esUniversitario: false  } };
   //  objArray.push(persona);

   // console.log(objArray[0].nombre);
   // console.log(objArray[1].nombre);

   // var persona3 = persona;
   
   // // persona3.nombre = "Pedro";
   // // persona.nombre = "Manuel";

   // // console.log(a);
   // // console.log(b);
   // var name = "nombre";
   //  //console.log(persona[name]);
   // // console.log(persona.estudios.esProgramador);
   // // console.log(persona2.nombre);
   // // console.log(persona2.estudios.esProgramador);
   // // console.log(persona3.nombre);
   // // console.log(persona3.estudios.esProgramador);


   return a;
};

const objeto = {
   nombre: 'Juan',
   edad: 30,
   direccion: {
      calle: 'Calle Falsa',
      numero: 123,
      ciudad: 'Springfield',
   },
};

    console.log(obtenerValorPropiedad(objeto, 'nombre'));
    console.log(obtenerValorPropiedad(objeto, 'edad'));

   // expect(obtenerValorPropiedad(objeto, 'nombre')).toBe('Juan');
   // expect(obtenerValorPropiedad(objeto, 'edad')).toBe(30);
module.exports = obtenerValorPropiedad;
