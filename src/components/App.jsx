import React from "react";
import styled, { ThemeProvider } from 'styled-components'
import If from './If'



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


    <ThemeProvider theme={theme}>

      <If teste={1 > 0}>

        <h1>Será mostrado?</h1>

      </If>






    </ThemeProvider>


  );
};
