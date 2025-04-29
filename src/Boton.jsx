import React from 'react'

export default function Boton(props) {
    const verificarMasRapida = () => {
        let tareaMin, indexMin, tiempoMin = Number.MAX_VALUE, hayTerminadas = false;

        props.lista.map((e, i) => {
            let tiempo = Math.abs(e.fechaCreacion - e.fechaTachado);
            
            if (tiempo < tiempoMin && !e.activo) {
            tiempoMin = tiempo;
            indexMin = i;
            hayTerminadas = true;
            }
        })

        if (hayTerminadas) {
            tareaMin = props.lista[indexMin].entrada;
            alert(`La tarea más rápida en realizarse fue "${tareaMin}", número ${indexMin + 1} en la lista.`);
        }
        else alert("Aún no fue terminada ninguna tarea.");
    }

    return (
        <button type="button" className="btn btn-primary" onClick={verificarMasRapida}>Tarea más rapida</button>
    )
}
