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

    // EVENT LISTENER
    // Para poder agregar ese "eventListener" ese oyente de eventos tenemos que agregarselo directamente en la estructura JSX, es decir en este archivo llamado "boton.jsx".
    // Sabemos que esa funcion "manejarClic" necesita un valor, nosotros nos estamos refieriendo a esa funcion con el nombre manejar clic.
    // Pero cuando usamos ese nombre del props en realidad nos  estamos refieriendo a cualquier valor que hayamos pasado a ese "prop", en este caso era la funcion "agregarInput" y esa funcion necesita recibir un valor para poder realizar esa funcion.
    // Y el valor que le estariamos pasando seria "props.children", ¿por qué? porque cuando hagamos clic en  uno de los botones queremos que se agrege a la pantalla el valor de ese boton, el numero o el simbolo o cualquiera de esos simbolos que tenemos en la calculadora y ese valor es "props.children" se esta pasando como un argumento
    <div
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`.trim()}
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>

    // El metodo ".trim()" es un metodo que te permite remover del principio o del final de una cadena de caracteres o en este caso una plantilla.
  );
  // EVENT LISTENER
  // Nosotros estamos pensando en el caso de "onClick={props.manejarClic(props.children)}" que estamos llamando a una funcion, pero precisamente como estamos llamando a una funcion... esto "props.manejarClic(props.children)" se vera reemplazado como valor retornado por esa funcion.

  // Para decirle al <div> que tiene que llamar a esa funcion tenemos que decirle es escribir algo parecido a una funcion flecha "() =>" al inicio de "props.manejarClic", asi estamos definiendo una funcion anual anonima una funcion que solo se va a usar una vez (esta es otra alternativa).

  // Y con esto estamos diciendo que cuando ocurra un clic se va a llamar a una funcion nueva que estamos creado que es anonima (no se esta definiendo arriba como otra funcion con un nombre especifico), si no que vamos a llamar a esta funcion "() => props.manejarClic(props.children)" nueva que no toma ningun parametro, podemos ver que es como una funcion flecha y retorna el resultado de llamar a esta funcion nueva "props.manejarClic(props.children)"
  
  // Ahora si estamos escribiendo una funcion como el valor de "onClick". Antes estabamos escribiendo una llamada a una funcion que es muy distinto, esta es una llamada a una funcion "props.manejarClic(props.children)" que se iba a ejecutar y se iba a retornar el valor retornado se iba a reemplazar aqui "props.manejarClic(props.children)".

  // Pero ahora con la funcion flecha o gracias a la funcion flecha, "() => props.manejarClic(props.children)" ahora si estamos escribiendo una funcion como tal dentro de las llaves y eso es lo que se necesita para el oyente de eventos es decir, el "eventListener"

  // PEro porque en lugar de una llamada tenemos que escribir una funcion, pero piensalo de esta forma, de esta forma "() =>" esa parte le esta diciendo a React o a JavaScript que queremos que se llame a una funcion, nuestro oyente de evenetos es decir, nuestro "eventListener" cuado ocurra un click, sera, una funcion que llame a otra funcion, es como una accion que esta ahi esperando a que ocurra el evento

  // En lugar de ocupar esto... "props.manejarClic(props.children)" que nos va a retornar solo un valor

}

export default Boton;