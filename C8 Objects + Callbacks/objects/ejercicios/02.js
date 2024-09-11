function actualizarValorPropiedad(objeto, propiedad, valor) {
   // Actualiza el valor de la propiedad del objeto recibidos en la función.
   // Retorna el objeto actualizado.
   // Tu código:
   objeto[propiedad] = valor;
   return objeto;
}

const obj = { foo: 'bar' };
const result = actualizarValorPropiedad(obj, 'foo', 'baz');
console.log(result);

const obj2 = { foo: 'bar' };
const result2 = actualizarValorPropiedad(obj2, 'baz', 42);

console.log(result2);

   // const obj = { foo: 'bar' };
   // const result = actualizarValorPropiedad(obj, 'foo', 'baz');
   // expect(result).toEqual({ foo: 'baz' });

   // const obj = { foo: 'bar' };
   // const result = actualizarValorPropiedad(obj, 'baz', 42);
   // expect(result).toEqual({ foo: 'bar', baz: 42 });

module.exports = actualizarValorPropiedad;
