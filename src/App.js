import './App.css';
// Para poder importar la imagen necesitamos una sentencia de importacion
// con la palabra "arthefacto" nos estamos refieriendo a una variable que creamos en nuestro archivo
import arthefactologo from './img/arthefacto_favicon.png';

function App() {
  return (
    <div className='App'>
      
      {/* <<<--- 01 - COMENZAR EL PROYECTO --->>> */}
      {/* Para esta aplicación vamos a crear varios componentes, iniciaremos con la estructura de nuestra aplicación */}

      {/* Tenemos un logo de ArtheFacto en la parte superior */}
      <div className='arthefacto-logo-contenedor'>
        {/* Recordar que las lleves {} nos permiten insertar código de JavaScript dentro de nuestro JSX, de esta forma podemos agregar nuestra descripcion de la estructura del componente y ese nombre lo podemos utilizar como una variable */}
        <img 
          src={arthefactologo}
          className='arthefacto-logo'
          alt='Logo de ArtheFacto Inc.'
        /> 
      </div>

      {/* <<<--- 02 - CONTENEDOR PRINCIPAL --->>> */}
      {/* Este <div> sera el contenedor principal de la calculadora */}
      <div className='contenedor-calculadora'>
        {/* Dentro de este <div> vamos a tener todos los botónes, las filas y los distintos elementos de la calculadora como la pantalla, todo eso estara dentro del <div> */}

        {/* <<<--- 03 - ESTRUCTURA DE LA CALCULADORA --->>> */}
        {/* Para ir creando la estructura inicial vamos a crear distintos <div> que van a definir las filas de nuestra calculadora */}
        {/* Entonces, cada uno de estos <div> sera una fila que podemos ver en la calculadora con los botones */}
        <div className='fila'>

          {/* <<<--- 04 - CREANDO LOS COMPONENTES --->>> */}
          {/* Crearemos los componentes de nuestra aplicación */}

          {/* Una alternativa es crear un componente completo para la calculadora y luego crear otros componentes mas pequeños, pero en este caso crearemos componentes como los botónes, la pantalla y luego los vamos a ubicar en el componente principal de la aplicación  llamada "App"  */}
          
          {/* Crearemos una carpeta llamada "componentes" */}
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>

        {/* Agregamos otro <div> que tendra la clase "fila", y esa ultima fila sera para el botón de "clear" */}
        <div className='fila'></div>
      </div>

    </div>
  );
}

export default App;
