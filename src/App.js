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

  // /FUNCION AGREGAR INPUT
  // Para crear ese estado ¿qué es lo que ha ingresado el usuario hasta el momento?
  const [input, setInput] = useState('');
  // En esta constante estamos creando un estado para la aplicacion llamado "input" este "input" que significa "valor ingresado por el usuario" se mantendra como el estado del componente "input" y por supuesto que tenemos una funcion para poder actualizar el "app o input"
  // Inicialmente ese "input" sera una cadena vacia, de esta manera no veremos nada en la pantalla 

  // Lo primero que haremos es asignar ese "input" como el valor de la pantalla para que cuando se actualice, actualice su valor. Vamos a nuestro componente "Pantalla" y vamos a pasar el "prop" "input" con el valor del estado "input"

  // La funcion "input"
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

          {/* EVENT LISTENER */}
          {/* Ya que tenemos nuestra funcion llamada "agregarInput" ahora tenemos que hacer que cada vez que hagamos clic en un botón se llame a esta función para agregar ese valor */}
          {/* En la estuctura de los botones vamos a pasarle a cada uno de estos botones un "props" llamado "manejar clic" y le agregaremos esa funcion "agregarInput" */}

          {/* Vamos a pasar un "props" a cada uno de estos botones que se llamara "manejarClic"  */}
          {/* ¿Cómo va a manejar el botón un clic especifico? lo hara llamando a la funcion "agregarInput" */}
          {/* El botón "clear" sera distinto, pero todos los demas botones van a "agregarInput" */}

          {/* Es decir mandaran a llamar a esta funcion, pero para eso primero tenemos que darles acceso a esa funcion pasandola como un "prop" debemos observar que solo estamos escribiendo el nombre de la funcion no estoy agregando un par de parentesis, ejemp. "manejarClic={agregarInput()}" si agrego los parentesis significa que:
            -Quiero llamar a la funcion
            -y pasar el resltado 
            
          Pero eso es lo que NO queremos, lo que queremos es pasar directamente la funcion para poder llamarla dentro del componente.
           */}
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>

        {/* Agregamos una nueva fila, esta ultima fila sera para el botón de clic */}
        {/* En esta parte se agrega el boton de "clear" */}
        {/* Este boton si tendra una etiqueta de apertura y una de cierre porque vamos asignarle el texto "clear" */}

        {/* 
        
        // EVENT LISTENER PARA EL BOTON "CLEAR"
        // Ahora que es lo que pasara ya que no tenemos de alguna forma eliminar esos valores de la pantalla y como vamos a eliminarlos, pues tenemos que empezar a implementar la funcionalidad del boton "clear".
        // Lo que queremos basicamente es reiniciar el estado del input, queremos volver a esa cadena de caracteres vacia que teniamos inicialmente, entonces basicamente lo que hacemos es definir una funcion
        // Ya vimos como podemos definir una funcion de esta forma, con cualquier funcion que necesites puedes definir la forma y luego pasarlo como el valor del "promp"
        
        // Pero otra opcion es definir la funcion de forma anonima directamente aqui, en lugar de usar un nombre al definir una funcion si es muy sencilla y muy pequeña puedes definirlo ahi mismo */}

        {/* Para el boton "Clear" vamos a tener un prop llamado "manejar clear", pero como vamos a manejar ese evento, vamos a manejarlo con una "funcion anonima" o "funcion flecha" que va a reiniciar el input con "setInput" a una cadena de caracteres vacía y de esta manera se crea esta funcion, esta es la funcion que estamos definiendo "() => setInput('')" */}
        {/* Recuerda que como es una funcion muy sencilla recuerda que para que sea un funcion tenemos que agregar "() =>" y no solo podemos llamar a esta funcion "setInput('')" si no que podemos escribirla directamente */}

        {/* Tambien podemos definirla como lo hicimos mas arriba asignando una funcion a una constante */}

        {/* Tambien debemos asegurarnos que el componente reciba ese "eventListener" y lo pueda asignar correctamente, asi que vamos a nuestro archivo de botón "Clear" */}
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>

      </div>
    </div>
  );
}

export default App;
