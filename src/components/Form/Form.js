import React from 'react'
import './form.css'

export const Form = ({setLista, listaTareas}) => {

    // Evento lanzado cada vez que el usuario haga Submit
    // Función: Extraer el contenido del input y agregarlo a la lista usando el metodo brindado por useState
    const handlerAgregar = (e) => {
        e.preventDefault();
        let tareaNueva = document.querySelector(".texto").value
        console.log("Tarea Nueva: ",tareaNueva)
        setLista([
            ...listaTareas, tareaNueva
        ])
        document.querySelector(".texto").value = ""
    }
    
    return(
        <form onSubmit={handlerAgregar}>
            <input type="text" className="texto" placeholder="Agregar tarea..."></input>
            <input type="submit" className="btn" value="Agregar"></input>
        </form>
    )
}