import React from 'react'
import './Botao.css'


export default props=>{

    return (

        <div>
            <button className = "btn btn-sm">{props.text}</button>
        </div>
    )
}