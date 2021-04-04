import React from "react";
import styled, { ThemeProvider } from 'styled-components'
import UseState from './hooks/UseState/index'
import Servico from './Servico/Servico'

const Row = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`

const theme = {

  colors: {

    primary: 'red',
    secondary: 'blue',
    success: 'green'
  }
}

export default () => {


  return (

    <div>


    </div>
  )

};
