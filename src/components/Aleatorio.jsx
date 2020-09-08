import React from "react";
import styled from "styled-components";

const Aleatorio = styled.div`
  background-color: red;
  width: 100%;
  height: 70px;
  font-size: 50px;
`;


//componente para gerar um numero aleatorio entre um valor minimo e
//maximo passados por parametro 
//Math.random() * (max - min) + min;

export default props => {
  return (
    <div>
      <Aleatorio>
        <p>{Math.floor(Math.random()*(props.max - props.min) + props.min)}</p>
      </Aleatorio>
    </div>
  );
};
