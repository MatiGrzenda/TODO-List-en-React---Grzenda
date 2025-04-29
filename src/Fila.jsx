import React, { useState } from 'react'

export default function Fila(props) {
    let clase = "", finalizacion = "";
    const [checkbox, setCheckbox] = useState(false);

    const tachar = (e) => {
        if (e.target.checked) {
            setCheckbox(true);
            props.setLista(props.lista.map((item, index) => {
                if (index === props.index) {
                    item.activo = false;
                    item.fechaTachado = new Date();
                }
                return item;
            }));
        }
        else props.setLista(props.lista.map((item, index) => {
            setCheckbox(false);
            if (index === props.index) {
                item.activo = true;
            }
            return item;
        }));
    }

    if (!props.activo) {
        clase = "tachado";
        finalizacion = props.fechaTachado.toLocaleTimeString() + ", " + props.fechaTachado.toLocaleDateString("en-GB");
    }

    const eliminarEntrada = () => {
        if (confirm("Está seguro que desea eliminar la tarea? No se podrá recuperar.")) props.setLista(props.lista.slice(0, props.index).concat(props.lista.slice(props.index + 1)));
        /*useEffect(() =>{
            setCheckbox(!props.lista[props.index].activo);
        });*/
    };

    return (
        <>
            <tr>
                <th scope="row"><input type="checkbox" onChange={tachar} className={"form-check-input checkbox-" + clase} checked={checkbox}></input></th>
                <td className={clase}>{props.entrada}</td>
                <td>{props.fechaCreacion.toLocaleTimeString()}, {props.fechaCreacion.toLocaleDateString("en-GB")}</td>
                <td>{finalizacion}</td>
                <td><button className="botonEliminar" onClick={eliminarEntrada}><i className="fa-solid fa-trash-can"></i></button></td>
            </tr>
        </>
    )
}
