import React from 'react';
import '../css/btnClear.css';

const BotonClear = props => (
  /* Este boton no va a tener una claser de tipo operador ni nada de eso, no vamos a tener que implementar esa logica */
  // Si no que solo se asignara el "boton-clear" como la clase y luego asignaremos "eventListener" para que realice su funcion.
  // Con esto tenemos la estructura principal de "clear"
  <button className="boton-clear">
    {props.children}
  </button>
);

export default BotonClear;