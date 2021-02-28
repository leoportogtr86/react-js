import React, { useState } from 'react'
import styled from 'styled-components'




const Title = styled.h1`

    color: red;
    text-align: center;
    margin: 20px;


`

const Button = styled.button`

    background-color: #a854a8;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    border-radius: 12px;
    color: white;
    width: 300px;

`

export default props => {


    const [texto, setTexto] = useState('Valor inicial do texto...')




    const mudaTexto = () => {

        setTexto("Valor alterado!")
    }


    return (

        <div>


            <Title>{texto}</Title>

            <Button onClick={mudaTexto}>Clique para alterar o valor do texto</Button>



        </div>
    )
}