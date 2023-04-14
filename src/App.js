import './App.css';
// Para poder importar una imagen necesitamos una sentencia de importacion
import logoArtheFacto from './img/arthefacto-logo.png';
import Boton from './component/boton';
import Pantalla from './component/input';
import BotonClear from './component/btnClear';
// Para poder mostrar el valor del botón en la pantalla necesitamos hacer uso de los "Hooks" y es "Hook" que ocuparemos es el de "estado" es decir "userState"
// Recuerda que para importar un Hook necesitamos de las llaves.
// Podemos agregar este "hook" al final o sobre los componentes, es decir hasta arriba de este archivo
import { useState } from 'react';
// Ya tenemos nuetsro "hook" eso significa que ya podemos asignarle un estado a nuestro componente, en este caso es nuestro componente principal de la aplicacion.
// Trabajaremos con el estado directamente.
// NOTA: Otro enfoque para poder realizarlo es creando otro componente llamado "calculadora" y que ese componente tuviera ese estado, cualquiera de los dos es valido.

function App() {
  // Para crear ese estado ¿qué es lo que ha ingresado el usuario hasta el momento?
  const [input, setInput] = useState('');
  // En esta constante estamos creando un estado para la aplicacion llamado "input" este "input" que significa "valor ingresado por el usuario" se mantendra como el estado del componente "input" y por supuesto que tenemo una funcion para poder actualizar el "app o input"
  // Inicialmente ese "input" sera una cadena vacia, de esta manera no veremos nada en la pantalla 

  // Lo primero que haremos es asignar ese "input" como el valor de la pantalla para que cuando se actualice, actualice su valor. Vamos a nuestro componente "Pantalla" y vamos a pasar el "prop" "input" con el valor del estado "input"

  // Recorda que inicialmente vamos a empezar con una cadena vacia y luego vamos a definir otra funcion.
  // Tenemos la funcion "agregar input"
  const agregarInput = val => {
    // ¿Qué es lo que hace esta funcion? esta funcion va actualizar el input.
    // Y dentro de los parentesis le vamos a pasar el nuevo valor de "input", y cual va a ser? el input que teniamos anteriormente, concatenado con el nuevo valor.
    setInput(input + val); 
  };



  return (
    <div className='App'>

      {/* LOGO */}
      <div className='logo-contenedor'>
        {/* Las llaves nos permiten insertar codigo de JavaScript dentro de nuestro JSX, nuestra descripcion de la estructura del componente */}
        {/* Entonces... lo que colocamos entre las llaves de "src={logoArtheFacto}" nos referimos a una variable que creamos en nuestro archivo */}
        <img
          src={logoArtheFacto}
          className='log-at'
          alt='Logo de  ArtheFacto'
        />
      </div>

      {/* CONTENEDOR CALCULADORA */}
      <div className='contenedor-calculadora'>
        {/* Ahora que tenemos nuestro componente Pantalla podemos mostrarlo en nuestra estructura principal */}
        <Pantalla input={input} />
        {/* En este caso el "prop" y la variable como tal el estado tienen el mismo nombre no necesariamente va a ocurrir y eso no afectara en nada el funcionamiento del componente */}

        {/* Dentro de este <div> vamos a tener todos los botones las filas y los distintos elementos de la calculadora como su pantalla */}

        {/* Para ir creando la estructura inicial creamos distintos <div> */}
        {/* Estos div definiran las filas, cada uno de estos sera una fila que vemos en una calculadora en los botones */}
        {/* Cada fila tendra 4 botones */}
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className='fila'>
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>

        {/* Agregamos una nueva fila, esta ultima fila sera para el botón de clic */}
        {/* En esta parte se agrega el boton de "clear" */}
        {/* Este boton si tendra una etiqueta de apertura y una de cierre porque vamos asignarle el texto "clear" */}
        <div className='fila'>
          <BotonClear>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
