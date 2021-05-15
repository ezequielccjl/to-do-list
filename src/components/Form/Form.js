import React from 'react'
import './form.css'

export const Form = ({setLista, listaTareas}) => {

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