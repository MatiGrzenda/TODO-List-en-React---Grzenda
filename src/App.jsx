import React, { useState } from 'react';
import Tabla from "./Tabla";
import Titulo from "./Titulo";
import Boton from "./Boton";

function App() {
  const [lista, setLista] = useState([]);
  if (localStorage.getItem("lista") != null) {
    setLista(JSON.parse(localStorage.getItem("lista")));
    const listaTemporal = lista.map((element) => {
      return { entrada: element.entrada, fechaCreacion: new Date(element.fechaCreacion), activo: element.activo, fechaTachado: new Date(element.fechaTachado) };
    })
    setLista(listaTemporal);
  }

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
