import React from 'react'

export default function PrimeraFila() {
    return (
        <>
            <thead>
                <tr>
                    <th scope="col"><input type="checkbox" className="primerCheckbox"></input></th>
                    <th scope="col">Tarea</th>
                    <th scope="col">Fecha de creación</th>
                    <th scope="col">Fecha de finalización</th>
                    <th scope="col"></th>
                </tr>
            </thead>
        </>
    )
}
