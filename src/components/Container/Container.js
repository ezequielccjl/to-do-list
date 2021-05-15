import React, {useState, useEffect} from 'react'
import {Form} from '../Form/Form'
import {List} from '../List/List'

export const Container = () => {

    const [listaTareas, setLista] = useState([])

    useEffect(()=>{
        console.log("useEffect: ",listaTareas)
    }, [listaTareas])


    return(
        <div className="overlay">
        
            <div className="main-title">To-Do List</div>

            <Form setLista={setLista} listaTareas={listaTareas}/>
            <List listaTareas={listaTareas}/>
      
        </div>
    )
}