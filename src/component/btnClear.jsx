import React from 'react';
import '../css/btnClear.css';

const BotonClear = (props) => (
  /* Este boton no va a tener una claser de tipo operador ni nada de eso, no vamos a tener que implementar esa logica */
  // Si no que solo se asignara el "boton-clear" como la clase y luego asignaremos "eventListener" para que realice su funcion.
  // Con esto tenemos la estructura principal de "clear"
  // En lugar de una cadena de caracteres vamos asignar la funcion enviada como un "props" asi "props.manejarClear"

  // Entonces estamos asignando la funcion "manejarClear" en la que almacena la funcion que pasamos como "() => setInput('')" esto reiniciara el valor de input y lo va a volver a colocar como una cadena de caracteres vacia y esa funcion la estamos asignando aqui, para que se ejecute cuando ocurra un evento de "click" sobre ese boton.

  // Para que el componente sea mas facil de leer puedes dividir los atributos de la etiqueta div en varias lineas.
  // Pero si nuestro codigo es conciso tambien podemos mantenerlo en la misma linea depende del gusto personal.
  <button className="boton-clear" onClick={props.manejarClear}>
    {props.children}
  </button>
);

export default BotonClear;