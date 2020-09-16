import React from 'react'
import './Condicional.css'

export default props =>{

    let x = 4
    let y = 13
    let nome  = 'Davi'

    return (

        <div>
{/* 
            operador ternario 
            condicao ? true : false */}

            {x > 5 ? <h1>X Maior que 5</h1> : <h1>X Menor que 5</h1>}

            {y%2 == 0 ? <h1>Y é par</h1> : <h1>Y é ímpar</h1> }

            {nome == 'Leo' ? <h1>Pai</h1> : <h1>Filho</h1>}


        </div>
    )
}