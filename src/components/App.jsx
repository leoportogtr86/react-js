import React, { useState } from "react";
import Menu from "./Menu";
import Axios from "axios";
import Condicional2 from "./Condicional2";

//poderiamos carregar a pagina e dar f5 para os numeros iremo mudando automaticamente
//ou fazer isso via hooks

let x = 11

export default props => {
  return (
    <div>
      <Condicional2 test = {x%2 == 0}>
        <h1>Par</h1>
      </Condicional2>

      <Condicional2 test = {x%2 != 0}>

        <h1>Ímpar</h1>

      </Condicional2>
    </div>
  );
};
