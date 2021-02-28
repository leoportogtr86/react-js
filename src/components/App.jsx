import React from "react";
import styled, { ThemeProvider } from 'styled-components'


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



  re


    <ThemeProvider theme={theme}>




    </ThemeProvider>


  );
};
