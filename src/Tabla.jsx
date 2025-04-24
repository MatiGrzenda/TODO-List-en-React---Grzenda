import React from 'react'
import Input from "./Input"
import Fila from "./Fila"
import PrimeraFila from './PrimeraFila';

export default function Tabla(props) {
    /*if (localStorage.getItem("props.lista") != null) {
        props.setLista(JSON.parse(localStorage.getItem("props.lista")));
        const props.listaTemporal = props.lista.map((element) => {
            return { entrada: element.entrada, fechaCreacion: new Date(element.fechaCreacion), activo: element.activo, fechaTachado: new Date(element.fechaTachado) };
        })
        props.setLista(props.listaTemporal);
    }*/

    let filas = <Fila entrada="a" fechaCreacion={new Date()} activo={true} fechaTachado={new Date()} lista={props.lista} setLista={props.setLista} index={0} />;

    filas = props.lista.map((item, index) => <Fila key={index} entrada={item.entrada} fechaCreacion={item.fechaCreacion} activo={item.activo} fechaTachado={item.fechaTachado} lista={props.lista} setLista={props.setLista} index={index} />)

    /*localStorage.setItem("props.lista", JSON.stringify(props.lista));*/

    return (
        <>
            <div className="tableContainer">
                <table className="table table-hover">
                    <PrimeraFila />
                    <tbody>
                        {filas}
                        <Input lista={props.lista} setLista={props.setLista} />
                    </tbody>
                </table>
            </div>
        </>
    )
}
