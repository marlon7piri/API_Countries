import "./App.css";
import Form from "./Form";
import { getPaises } from "./api";
import { useEffect, useState } from "react";
import CardPaises from "./CardPaises";


function App() {
  const [paises, setPaises] = useState([]);
  const [tablapaises, setTablaPaises] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const getPais = () => {
    getPaises()
      .then((response) => {
        setPaises(response);
        setTablaPaises(response)
      })
      .catch((error) => {
        console.log(`el error es ${error}`);
      });
  };

 

  useEffect(() => {
    getPais();
  }, []);
  

  return (
    <div>
      Paises
      <div>

      
        <Form tablapaises={tablapaises} setPaises={setPaises} setBusqueda={setBusqueda} busqueda={busqueda} getPais={getPais} paises={paises}/>
        <h3 className="titulo">Paises</h3>
        <CardPaises paises={paises} />
      </div>
    </div>
  );
}

export default App;
