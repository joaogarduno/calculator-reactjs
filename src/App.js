import './App.css';
// Para poder importar una imagen necesitamos una sentencia de importacion
import logoArtheFacto from './img/arthefacto-logo.png';
import Boton from './component/boton';
import Pantalla from './component/input';
import botonClear from './component/btnClear';

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
        {/* Ahora que tenemos nuestro componente Pantalla podemos mostrarlo en nuestra estructura principal */}
        <Pantalla />

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
          <botonClear>Clear</botonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
