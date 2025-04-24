import React from 'react'

export default function Boton(lista, setLista) {
    const verificarMasRapida = () => {
        let tareaMin, indexMin, tiempoMin = Number.MAX_VALUE, hayTerminadas = false;

        for (let i = 0; i < lista.length; i++) {
            let tiempo = Math.abs(lista[i].fechaCreacion - lista[i].fechaTachado);

            if (tiempo < tiempoMin && !lista[i].activo) {
                tiempoMin = tiempo;
                indexMin = i;
                hayTerminadas = true;
            }
        }

        if (hayTerminadas) {
            tareaMin = lista[indexMin].entrada;
            alert(`La tarea más rápida en realizarse fue "${tareaMin}", número ${indexMin + 1} en la lista.`);
        }
        else alert("Aún no fue terminada ninguna tarea.");
    }

    return (
        <button type="button" className="btn btn-primary" onClick={verificarMasRapida}>Tarea más rapida</button>
    )
}
