import React, { useState } from "react";
import Menu from "./Menu";
import Axios from "axios";

//poderiamos carregar a pagina e dar f5 para os numeros iremo mudando automaticamente
//ou fazer isso via hooks

export default props => {
  const [msg, setMsg] = useState("");

  Axios.get("http://localhost:3001/react").then(res => {
    console.log(res.data);

    setMsg(res.data.msg)
  });

  return (
    <div>


      

      <Menu item1="HOME" item2="QUEM SOMOS" item3="AGENDA" item4="PRODUTOS" />


      <h2 >{msg}</h2>
    </div>
  );
};
