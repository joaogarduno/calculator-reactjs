import './App.css';
// Para poder importar una imagen necesitamos una sentencia de importacion
import logoArtheFacto from './img/arthefacto-logo.png';
import Boton from './component/boton';

function App() {
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
        {/* Dentro de este <div> vamos a tener todos los botones las filas y los distintos elementos de la calculadora como su pantalla */}

        {/* Para ir creando la estructura inicial creamos distintos <div> */}
        {/* Estos div definiran las filas, cada uno de estos sera una fila que vemos en una calculadora en los botones */}
        <div className='fila'>
          <Boton>1</Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>

        {/* Agregamos una nueva fila, esta ultima fila sera para el botón de clic */}
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
