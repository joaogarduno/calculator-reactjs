import React from 'react'
// Forma alternativa de definir los componentes funcionales, no siempre y no necesariamente tenemos que usar la palabra clave "function", tenemos otra alternativa que se llama "const" y definir el componente como una "funcion flecha" o tambien conocida como "arrow function"

// NOTA: Recordar que siempre el nombre del componente siempre debe iniciar con mayuscula y definimos el "componente" como normalmente definimos una "funcion flecha".
// En este componente (lo que es una funcion flecha) la ultima parte se hace con parentesis porque vamos a retornar directamente la estructura del componente.
// Normalmente este tipo de definicion esta sintaxis la podemos usar para componentes que son mas sencillos que solo tienen una presentacion, no tienen como tal una logica o funciones.
// En nuestro caso la pantalla sera un div sencillo, que mostrara un cierto valor llamado "input", entonces ese <div> va a tener una clase llamada "input"

// El "input" es el valor ingresado por el usuario, es decir es el valor que ingreso el usuario.
// Pero como vamos a tomar esos "props" vamos a usar la sintaxis de "desestructuracion" vamos a escribir "({ input }) dentro del parentesis de la funcion flecha y luego ese valor puesto como "prametro" que ha ingresado el usuario que se pasara al componente
const Pantalla = ({ input }) => (
  <div className='input'>
    {/* Ese valor lo vamos a reemplazar aqui */}
    {input}
    {/* Recordar que con la llaves podemos reemplazar codigo de JavaScript y trabajar con los "props" */}
  </div>
);

export default Pantalla;

// Recordar que acabamos de definir un componente como una funcion flecha.

// Entonces, primero lo definimos nuestro componente como una funcion flecha a traves de una constante para que no se pueda reasignar ese valor de pantalla y que "Pantalla" es el nombre del componente.