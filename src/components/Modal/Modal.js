import React from 'react'
import './modal.css'

export const Modal = ({handlerModal}) => {
    return(

        <div className="cont_modal">
            <div className="modal-1">Información</div>
            <div className="modal-2">TO-DO List desarrollada con React</div>
            <div className="modal-3">Esta aplicación consta con un input para colocar elementos dentro de una lista</div>
            <div className="modal-4">Cuando se muestren las tareas el usuario podrá clickearlas para que se muestren tachadas.</div>
            <div className="modal-5">Ezequiel Cordova.</div>
            <button className="btn_modal" onClick={handlerModal}>Volver</button>
        </div>
    )
}