import React, { useState } from 'react'

export default function Input(props) {
    const [text, setText] = useState();
    const nuevaEntrada = (e) => {
        e.preventDefault();
        const fechaCreacion = new Date();
        props.setLista(props.lista.concat(({ entrada: e.target.input.value, fechaCreacion: fechaCreacion, activo: true, fechaTachado: fechaCreacion }))); //Pongo fechaCreacion en fechaTachado para que reconozca que es una fecha.
        setText("");
    }

    const changeText = (e) => setText(e.target.value);

    return (
        <>
            <tr>
                <th scope="row"></th>
                <td>
                    <form onSubmit={nuevaEntrada}>
                        <input type="text" name="input" onChange={changeText} value={text} autoComplete="off" required></input>
                        <input type="submit"></input>
                    </form>
                </td>
                <td colSpan="3"></td>
            </tr>
        </>
    )
}
