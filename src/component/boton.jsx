// Despues de crear nuestros componentes lo primero que debemos hacer es importar "react"
import React from 'react';

// Luego definimos nuestro componente funcional
function Boton(props){
  return(
    // En este caso en lugar de ser una clase como tal sencilla que usamos en HTML vamos a crear una clase mas elaborada que va a contener codigo de JavaScript para decidir cual va ser la clase del botón, ¿Por qué? porque en la calculadora vamos a necesitar tener distintos estilos para distintos valores de ese botón, si es un operador que queremos que el fondo del botón sea verde y si es un numero queremos que el color de fondo sea distinto, asi que para lograr eso tenemos que usar JavaScript
    // Estas comillas invertidas en JavaScript nos sirven para crear plantillas literales es decir "Template Literals", basicamente nos van a permitir crear una cadena de caracteres que puede contener cierto codigo de JavaScript para definir el resultado.
    // queremos que todos los botónes tengan ciertas propiedades CSS en comun asi que vamos a definir una clase llamda "boton-contenedor", esta sera fija, todos los botones que creemos van a tener esta clase, pero necesitamos saber si ese boton necesita tener una clase adicional llamada operador, esa clase operador la vamos agregar solamente si el valor de "children" representa a un operador de suma resta multiplicacion o division asi que vamos a escribirlo dentro de la plantilla.
    // Esto nos permite crear clases mas dinamicas y mas complejas para insertar codigo de JavaScript dentro de esta plantilla literal que es ya en si codigo de JavaScript tenemos que usar el signo de pesos $ y las llaves.
    // Primero determinar si el valor de children es un operador anonimo asi que vamos a definir una funcion y esa funcion se llamara "esOperador".
    // Esta funcion tomara el valor de "props.children" y denpendiendo de ese valor (usamos "if") vamos a asignarle la clase "operador" o "ninguna clase adicional" en ese caso escribimos "null" que representa el valor nulo en JavaScript

    // Y decimos "Si el resultado o el valor retornado por esta funcion es verdadero es decir es <<true>> entonces se reemplazara toda la expresion ${esOperador(props.children) ? 'operador' : null} " por "operador" que sera toda la clase que es la segunda clase que le vamos asignar, entonces si la primera parte llamada a la funcion es decir esto "esOperador(props.children)"  es falsa entonces se retornara "null"
    <div
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}>
      {props.children}
    </div>
  );

}

export default Boton;