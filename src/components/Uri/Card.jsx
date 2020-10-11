import React from "react";
import Botao from "./Botao";
import './Card.css'

export default props => {
  return (
    <div>
      <div className="card sombra">
        <div className="card-header bg-light">
          <h1 className="text-danger">{props.header}</h1>
        </div>

        <div className="card-body bg-dark">
          <p>{props.body}</p>
          <Botao text="Clik Here" />
        </div>
      </div>
    </div>
  );
};
