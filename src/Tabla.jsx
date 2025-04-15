import React from 'react'
import Input from "./Input"

export default function Tabla() {
    return (
        <>
            <div class="tableContainer">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col"><input type="checkbox" class="primerCheckbox"></input></th>
                            <th scope="col">Tarea</th>
                            <th scope="col">Fecha de creación</th>
                            <th scope="col">Fecha de finalización</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <Input />
                </table>
            </div>
        </>
    )
}
