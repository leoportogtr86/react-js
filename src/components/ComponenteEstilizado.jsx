import React from "react";
import styled from "styled-components";

const Texto = styled.h1`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 40px;
  color: red;
  background-color: blue;
  width: 100%;
`

export default props => {



  return (
    <div>
      <Texto>
        <h1>Vamos estilizar este h1 com styled components</h1>
      </Texto>
    </div>
  );
};
