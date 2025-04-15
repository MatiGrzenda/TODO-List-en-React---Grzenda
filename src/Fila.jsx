import React from 'react'

export default function Fila() {
    return (
        <>
            <tr>
                <th scope="row"><input type="checkbox" /*onchange="tachar(${i})"*/ class="form-check-input"></input></th>
                <td /*class={clase}*/>{this.props.entrada}</td>
                <td>{this.props.fechaCreacion.toLocaleTimeString()}, {this.props.fechaCreacion.toLocaleDateString("en-GB")}</td>
                <td>{/*finalizacion*/}</td>
                <td><button class="botonEliminar" /*onclick="eliminarEntrada(${i})"*/><i class="fa-solid fa-trash-can"></i></button></td>
            </tr>
        </>
    )
}
