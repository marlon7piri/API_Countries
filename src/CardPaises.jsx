import React from "react";

export default function CardPaises({ paises}) {
 

  const Paises = () => {
    return paises && paises.map((pais) => {
    
        return (
          
          <div key={pais.name.common} className="card_pais">
            <div className="imagen_container">
              <img src={pais.flags.svg} alt="" className="imagen" />
            </div>
            <p className="texto"> {pais.name.common}</p>
            <p className="texto">poblacion: {pais.population}</p>
            <p className="texto">Capital: {pais.capital}</p>
            <p className="texto">Continente: {pais.continents}</p>
            
           
            
          </div>
        );
      
    });
  };
  return (
    <div className="container">
      

      {Paises()}
    </div>
  );
}
