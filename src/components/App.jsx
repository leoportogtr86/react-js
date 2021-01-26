import React from "react";
import styled, { ThemeProvider } from 'styled-components'
import Text00 from './Texto00'




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

      <Row>

        <Text00 title="Leo Porto" />
        <Text00 title="Leo Porto" />
        <Text00 title="Leo Porto" />
        <Text00 title="Leo Porto" />


      </Row>


    </ThemeProvider>


  );
};
