import React from 'react'

export default function Fila(props) {
    const tachar = (e) => {
        let listaTemporal = props.lista;
        if (e.target.checked) {
            listaTemporal[props.index].activo = false;
            listaTemporal[props.index].fechaTachado = new Date();
        }
        else listaTemporal[props.index].activo = true;

        props.setLista(listaTemporal);
    }

    let clase = "", finalizacion = "";

    if (!props.activo) {
        clase = "tachado";
        finalizacion = props.fechaTachado.toLocaleTimeString() + ", " + props.fechaTachado.toLocaleDateString("en-GB");
    }

    const eliminarEntrada = () => { if (confirm("Está seguro que desea eliminar la tarea? No se podrá recuperar.")) props.setLista(props.lista.slice(0, props.index).concat(props.lista.slice(props.index + 1))) };

    return (
        <>
            <tr>
                <th scope="row"><input type="checkbox" onChange={tachar} className="form-check-input"></input></th>
                <td className={clase}>{props.entrada}</td>
                <td>{props.fechaCreacion.toLocaleTimeString()}, {props.fechaCreacion.toLocaleDateString("en-GB")}</td>
                <td>{finalizacion}</td>
                <td><button className="botonEliminar" onClick={eliminarEntrada}><i className="fa-solid fa-trash-can"></i></button></td>
            </tr>
        </>
    )
}
