import React, { useState } from 'react';
import Tabla from "./Tabla";
import Titulo from "./Titulo";
import Boton from "./Boton";

function App() {
  const [lista, setLista] = useState((JSON.parse(localStorage.getItem("lista")) || []).map((element) => {
    if (localStorage.getItem("lista") != null) return { entrada: element.entrada, fechaCreacion: new Date(element.fechaCreacion), activo: element.activo, fechaTachado: new Date(element.fechaTachado) }
    else return [];
  }));

  return (
    <>
      <Titulo />
      <section>
        <Tabla lista={lista} setLista={setLista} />
      </section>
      <Boton lista={lista} />
    </>
  )
}

export default App
