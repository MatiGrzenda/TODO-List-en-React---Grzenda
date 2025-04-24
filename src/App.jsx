import React, { useState } from 'react';
import Tabla from "./Tabla";
import Titulo from "./Titulo";
import Boton from "./Boton";

function App() {
  const [lista, setLista] = useState([]);

  return (
    <>
      <Titulo />
      <section>
        <Tabla lista={lista} setLista={setLista} />
      </section>
      <Boton lista={lista} setLista={setLista} />
    </>
  )
}

export default App
