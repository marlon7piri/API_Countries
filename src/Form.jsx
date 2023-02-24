import React, { useEffect, useState } from "react";

export default function Form({
  setBusqueda,
  setPaises,
  tablapaises,
  busqueda,paises
}) {


  const handelChange = async (e) => {
    e.preventDefault();
    
    filtrar(busqueda);
  };

  const filtrar = (terminoDeBusqueda) => {
    const resultado = tablapaises.filter((pais) => {
      if (pais.name.common.toString().toLowerCase().includes(terminoDeBusqueda.toLowerCase())) {
        
        return pais;
      }
    });
    setPaises(resultado);
    console.log(resultado);
  };



  return (
    <div className="cointainer">
      <div>
        <form onSubmit={handelChange}>
          <input
            type="text"
            onChange={(e)=>setBusqueda(e.target.value)}
            value={busqueda}
            placeholder="pais"
          />
          <button>buscar</button>
        </form>
      </div>
    </div>
  );
}
