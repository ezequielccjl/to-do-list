import React, {useState, useEffect} from 'react'
import {Form} from '../Form/Form'
import {List} from '../List/List'
import {Modal} from '../Modal/Modal'

export const Container = () => {

    // Creación de estados (LISTA DE TAREAS)
    const [listaTareas, setLista] = useState([])

    // Evento implementado en botones Informacion y Atras(dentro del modal)
    const handlerModal = () => {
        document.querySelector(".cont_modal").classList.toggle("bajar_modal")
    }

    // useEffect utilizado para generar historial de tareas en consola
    useEffect(()=>{
        console.log("useEffect: ",listaTareas)
    }, [listaTareas])

    return(
        <div className="overlay">
        
            <div className="main-title">To-Do List</div>

            <Form setLista={setLista} listaTareas={listaTareas}/>
            <List listaTareas={listaTareas} handlerModal={handlerModal}/>
            <Modal handlerModal={handlerModal}/>
      
        </div>
    )
}