import React from 'react'
import Input from "./Input"
import Fila from "./Fila"
import PrimeraFila from './PrimeraFila';

export default function Tabla(props) {
    let filas = [];

    filas = props.lista.map((item, index) => <Fila key={index} entrada={item.entrada} fechaCreacion={item.fechaCreacion} activo={item.activo} fechaTachado={item.fechaTachado} lista={props.lista} setLista={props.setLista} index={index} />)

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
