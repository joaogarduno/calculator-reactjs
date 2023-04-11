// Despues de crear nuestros componentes lo primero que debemos hacer es importar "react"
import React from 'react';
import '../css/boton.css';

// Luego definimos nuestro componente funcional
function Boton(props){

  // DEFINIR UNA FUNCION
  // vamos a definir esta funcion "esOperador" tiene que retornar verdadero o falso.
  // USaremos una funcion flecha, esa funcion flecha va a tomar un valor ese es el nombre que le asignaremos al parametro "valor".
  // Nota: "valor" es el nombre del parametro de la funcion
  const esOperador = valor => {
    // retornara verdadero o falso, pero ese verdadero o falso estará definido por 3 criterios especificos:
    /*

    Si "valor" no es un numero, (la funcion "isNan" en JavaScript es muy util para confirmar si una cadena de caracteres no es un numero), si no es un numero y tampoco es un punto "." y si tampoco es el signo "=", es decir, no queremos que ni el punto y el signo igual se consideren como operadores, no queremos cambiarles el estilo, entonces en este caso si se cumplen esas 3 condiciones:
      - si "valor" no es un numero,
      - no es el punto,
      - Y no es el signo de igual.
    Entonces lo consideramos como un operador. Y retornamos el valor verdadero "TRUE".

    Si NO cualquiera de estos criterios es FALSO FALSE entonces se retornara el valor falso.

    */
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  return(
    // A este div tenemos que agregarle 2 atributos importantes:
      // 1. La clase
      // 2. Y ¿Qué es lo que va hacer el botón cuando hagamos clic sobre el?

    // Iremos paso a paso, primero comenzaremos con la clase.
    // En este caso en lugar de ser una clase como tal sencilla que usamos en HTML vamos a crear una clase mas elaborada que va a contener codigo de JavaScript para decidir cual va ser la clase del botón, ¿Por qué? porque en la calculadora vamos a necesitar tener distintos estilos para distintos valores de ese botón, si es un operador que queremos que el fondo del botón sea verde y si es un numero queremos que el color de fondo sea distinto, asi que para lograr eso tenemos que usar JavaScript.

    // Como queremos usar JavaScript o escribir codigo de Java Script escribiremos un par de llaves y dentro de las llaves usamos comillas invertidas. Estas comillas en JavaScript nos nos sirven para crear plantillas literales es decir en ingles se conocen como... "Template Literals", basicamente nos van a permitir crear una cadena de caracteres que puede contener cierto codigo de JavaScript para definir el resultado.

    // Ahora, queremos que todos los botónes tengan ciertas propiedades CSS en comun asi que vamos a definir una clase llamda "boton-contenedor", esta sera fija por eso se escribe directamente, todos los botones que creemos van a tener esta clase, pero necesitamos saber si ese boton necesita tener una clase adicional llamada operador, esa clase operador la vamos agregar solamente si el valor de "children" (ese caracter que escribimos entre las etiquetas) representa a un operador de suma, resta multiplicación, o división así que vamos a escribirlo dentro de la plantilla (esto nos permite crear clases mas dinamicas y mas complejas) para insertar codigo de JavaScript dentro de esta plantilla literal que es ya en si codigo de JavaScript tenemos que usar el signo de pesos $ y las llaves.

    /*

    1. Primero determinar si el valor de children es un operador o no
        - Así que vamos a definir una funcion y esa funcion se llamara "esOperador".
        - Esta funcion tomara el valor de "props.children" y denpendiendo de ese valor (usamos "if") vamos a asignarle la clase "operador" o "ninguna clase adicional" //  en ese caso escribimos "null" que representa el valor nulo en JavaScript.

    */
    //  
    

    // Y decimos...
    /*
    
    "Si el resultado o el valor retornado por esta funcion es verdadero es decir es <<true>>"
      * Entonces se reemplazara toda la expresion ${esOperador(props.children) ? 'operador' : null} " por "operador" que sera toda la clase, que es la segunda clase que le vamos asignar.
      * Y si la primera parte llamada a la funcion es decir esto "esOperador(props.children)"  es falsa entonces se retornara "null"
      * 
    */
    <div
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`.trim()}>
      {props.children}
    </div>

    // El metodo ".trim()" es un metodo que te permite remover del principio o del final de una cadena de caracteres o en este caso una plantilla.
  );

}

export default Boton;