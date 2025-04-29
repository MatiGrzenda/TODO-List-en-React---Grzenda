import React from 'react';

export default function Fila(props) {
    localStorage.setItem("lista", JSON.stringify(props.lista));

    let clase = "", finalizacion = "";

    const tachar = (e) => {
        props.setLista(props.lista.map((item, index) => {
            if (index === props.index) {
                item.activo = !e.target.checked;
                if (!e.target.checked) item.fechaTachado = new Date();
            }
            return item;
        }));
    };

    if (!props.activo) {
        clase = "tachado";
        finalizacion = props.fechaTachado.toLocaleTimeString() + ", " + props.fechaTachado.toLocaleDateString("en-GB");
    }

    const eliminarEntrada = () => {
        if (confirm("Está seguro que desea eliminar la tarea? No se podrá recuperar.")) {
            props.setLista(props.lista.filter((_, index) => index !== props.index));
        }
    };

    return (
        <>
            <tr>
                <th scope="row"><input type="checkbox" onChange={tachar} className={"form-check-input checkbox-" + clase} checked={!props.activo} /></th>
                <td className={clase}>{props.entrada}</td>
                <td>{props.fechaCreacion.toLocaleTimeString()}, {props.fechaCreacion.toLocaleDateString("en-GB")}</td>
                <td>{finalizacion}</td>
                <td><button className="botonEliminar" onClick={eliminarEntrada}><i className="fa-solid fa-trash-can"></i></button></td>
            </tr>
        </>
    );
}
