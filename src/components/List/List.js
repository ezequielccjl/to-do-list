import React from 'react'

import './list.css'

export const List = ({listaTareas}) => {

    const liHandler = (indice) => {
        //Cambiar de funcionalidad CSS a funcionalidad con estados
        //Tarea completada o no con boolean en objeto del array
        console.log("Hay que tachar", listaTareas[indice])
        console.log(".task-" + indice)
        let liSeleccionado = document.querySelector(".task-"+ indice)
        liSeleccionado.classList.toggle("tachado")
    }

    return(
        <div className="cont_lista">
            <ul>
                {
                    listaTareas ? 
                        listaTareas.map((item)=>{
                            return(
                                <li key={listaTareas.indexOf(item)} className={"task-" + listaTareas.indexOf(item)} onClick={()=>{
                                    liHandler(listaTareas.indexOf(item))
                                }}>{item}</li>
                                )
                        })
                        : 
                        <div>No hay tareas cargadas</div>
                        
                    }
            </ul>
        </div>
    )
}