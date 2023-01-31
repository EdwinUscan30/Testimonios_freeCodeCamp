import React from "react";
import '../hojas-de-estilo/Testimonio.css'

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className='imagen-testimonio'
        src={require(`../imagenes/people_${props.imagen}.jpg`)}
        alt="Foto de Emma"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">{props.nombre}</p>
        <p className="cargo-testimonio"> {props.cargo} </p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
        <button className='button-testimonio'>Leer Más</button>
      </div>
    </div>
  );
}

//Exportar  
export default Testimonio;