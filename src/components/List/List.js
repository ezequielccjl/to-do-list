import React from 'react'

import './list.css'

export const List = ({listaTareas, handlerModal}) => {

    // Evento que se ejecuta cuando el usuario clickea la tarea
    // Agrega clase CSS
    const liHandler = (indice) => {
        let liSeleccionado = document.querySelector(".task-"+ indice)
        liSeleccionado.classList.toggle("tachado")
    }

    return(
        <div className="cont_lista">
            <button className="btn_modal" onClick={handlerModal}>Información</button>
            <ul>
                {
                    // Mapeo de tareas traido desde Props del componente
                    listaTareas && 
                        listaTareas.map((item)=>{
                            return(
                                <li key={listaTareas.indexOf(item)} className={"task-" + listaTareas.indexOf(item)} onClick={()=>{
                                    liHandler(listaTareas.indexOf(item))
                                }}>{item}</li>
                                )
                        })
                        
                    }
            </ul>
        </div>
    )
}