import React, { useState } from 'react'
import Input from "./Input"
import Fila from "./Fila"
import PrimeraFila from './PrimeraFila';

export default function Tabla() {
    const [lista, setLista] = useState([]);

    /*if (localStorage.getItem("lista") != null) {
        setLista(JSON.parse(localStorage.getItem("lista")));
        const listaTemporal = lista.map((element) => {
            return { entrada: element.entrada, fechaCreacion: new Date(element.fechaCreacion), activo: element.activo, fechaTachado: new Date(element.fechaTachado) };
        })
        setLista(listaTemporal);
    }*/

    let filas = <Fila entrada="a" fechaCreacion={new Date()} activo={true} fechaTachado={new Date()} lista={lista} setLista={setLista} index={0} />;

    filas = lista.map((item, index) => <Fila key={index} entrada={item.entrada} fechaCreacion={item.fechaCreacion} activo={item.activo} fechaTachado={item.fechaTachado} lista={lista} setLista={setLista} index={index} />)
    console.log(filas);

    /*localStorage.setItem("lista", JSON.stringify(lista));*/

    return (
        <>
            <div className="tableContainer">
                <table className="table table-hover">
                    <PrimeraFila />
                    <tbody>
                        {filas}
                        <Input lista={lista} setLista={setLista} />
                    </tbody>
                </table>
            </div>
        </>
    )
}
