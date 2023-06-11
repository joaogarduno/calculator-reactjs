import React from 'react';
import '../css/btnClear.css';

// ADDEVENT LISTENER EN CLEAR
// En este momento recibimos props, asi que si lo puede recibir, vamos asignarlo como un "eventListener" con el atributo "onClick" y en lugar de una "cadena de caracteres" vamos asignar enviada como un props "props.manejarClear"
// Asi estamos asignando la funcion "manejarClear" que pasamos aqui esa funcion reiniciara el valor de input y lo pondra nuevamente como una cadena de caracteres vacía y esa fucion se esta asignado aquí para que se ejecute cuando ocurra un evento de clic

const BotonClear = (props) => (
  /* Este boton no va a tener una claser de tipo operador ni nada de eso, no vamos a tener que implementar esa logica */
  // Si no que solo se asignara el "boton-clear" como la clase y luego asignaremos "eventListener" para que realice su funcion.
  // Con esto tenemos la estructura principal de "clear"
  // En lugar de una cadena de caracteres vamos asignar la funcion enviada como un "props" asi "props.manejarClear"

  // Entonces estamos asignando la funcion "manejarClear" en la que almacena la función que pasamos como "() => setInput('')" esto reiniciara el valor de input y lo va a volver a colocar como una cadena de caracteres vacia y esa funcion la estamos asignando aqui, para que se ejecute cuando ocurra un evento de "click" sobre ese boton.

  // Para que el componente sea mas facil de leer puedes dividir los atributos de la etiqueta div en varias lineas.
  // Pero si nuestro codigo es conciso tambien podemos mantenerlo en la misma linea depende del gusto personal.
  <button className="boton-clear" onClick={props.manejarClear}>
    {props.children}
  </button>
);

export default BotonClear;