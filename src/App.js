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
      </div>

    </div>
  );
}

export default App;
