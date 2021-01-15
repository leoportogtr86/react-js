import React, { useState } from 'react'
import axios from 'axios'


export default props => {

    const [lista, setLista] = useState('')




    axios.get('http://files.cod3r.com.br/curso-js/funcionarios.json').then((res) => {




        setLista(res.data.map((e) => {

            return <li>{`Nome: ${e.nome}`} <hr /> {`Email: ${e.email}`}  <hr /> {`Salário: ${e.salario}`} <strong><hr /></strong></li>
        }))


    })


    return (

        <div>

            <ul className="text-center text-primary bg-light">{lista}</ul>

        </div>
    )
}