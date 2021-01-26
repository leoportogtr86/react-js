import React from "react";
import styled, { createGlobalStyle } from 'styled-components'



const GlobalStyle = createGlobalStyle`

    h1{

      color: red;
      background-color: #815858;
    }

`

export default () => {



  return (


    <div>
      <GlobalStyle />


      <h1>Teste</h1>

    </div >


  );
};
